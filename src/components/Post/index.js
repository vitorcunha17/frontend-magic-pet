import React, { useState, useEffect } from 'react';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button,
  Right,
  Icon,
} from 'native-base';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import firebase from '../../config/firebaseConfig';
import * as PostActions from '../../store/actions/posts.actions';
import { Alert, AsyncStorage } from 'react-native';
import 'firebase/firestore';

export default function Post({ post }) {
  const dispatch = useDispatch();
  async function handleLike() {
    const userUid = await AsyncStorage.getItem('uid');
    let positionLike = null;

    post.likes.map((uid, index) => {
      if (uid === userUid) {
        positionLike = index;
      }
    });
    if (positionLike === null) {
      firebase
        .firestore()
        .collection('posts')
        .doc(post.id)
        .update({
          likes: [userUid, ...post.likes],
        });
    } else {
      let newArrayLikes = post.likes;
      newArrayLikes.splice(positionLike, 1);

      firebase
        .firestore()
        .collection('posts')
        .doc(post.id)
        .update({
          likes: newArrayLikes,
        });
    }

    dispatch(PostActions.getAllPosts());
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                'https://love.doghero.com.br/wp-content/uploads/2016/09/destaqueestilosos1.jpg',
            }}
          />
          <Body>
            <Text>{post.user.name}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{post.content}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent onPress={handleLike}>
            <Icon active={false} name="thumbs-up" />
            <Text>{post.likes.length} Likes</Text>
          </Button>
        </Left>
        <Right>
          <Text>{post.date}</Text>
        </Right>
      </CardItem>
    </Card>
  );
}
