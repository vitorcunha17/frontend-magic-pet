import firebase from '../../config/firebaseConfig';
import 'firebase/firestore';
import * as types from './types';

export function getAllPosts() {
  return dispatch => {
    dispatch({
      type: types.GET_ALL_POSTS_REQUEST,
    });

    firebase
      .firestore()
      .collection('posts')
      .orderBy('date')
      .get()
      .then(snapshot => {
        let getPosts = [];
        snapshot.forEach(doc => {
          let user;

          firebase
            .firestore()
            .collection('users')
            .doc(doc.data().user_uid)
            .get()
            .then(snap => {
              user = snap.data();
              getPosts.push({ ...doc.data(), id: doc.id, user });

              dispatch({
                type: types.GET_ALL_POSTS_SUCCESS,
                payload: getPosts,
              });
            });
        });
      })
      .catch(err =>
        dispatch({
          type: types.GET_ALL_POSTS_FAILURE,
          payload: err,
        })
      );
  };
}
