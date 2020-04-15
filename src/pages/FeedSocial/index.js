import React, { useEffect, useState } from 'react';
import {
  Textarea,
  Title,
  Container,
  Header,
  Content,
  Text,
  Button,
  Body,
} from 'native-base';
import Icon from '../../components/Icon';
import {
  Dimensions,
  Platform,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import * as PostActions from '../../store/actions/posts.actions';
import Post from '../../components/Post';
import DefaultHeader from '../../components/DefaultHeader';
import firebase from '../../config/firebaseConfig';
import 'firebase/firestore';

export default function FeedSocial(props) {
  const dispatch = useDispatch();
  const [userUid, setUserUid] = useState();
  const { height } = Dimensions.get('window');
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const postsRedux = useSelector(state => state.posts);

  useEffect(() => {
    setLoading(true);

    dispatch(PostActions.getAllPosts());

    async function getUserUID() {
      setUserUid(await AsyncStorage.getItem('uid'));
    }
    getUserUID();
    setLoading(false);
  }, []);

  function handlePost() {
    setLoading(true);

    firebase
      .firestore()
      .collection('posts')
      .doc()
      .set({
        user_uid: userUid,
        content,
        likes: [],
        date: moment().format('DD/MM/YYYY HH:mm:ss'),
      });

    setContent('');
    dispatch(PostActions.getAllPosts());
    setLoading(false);
  }

  return (
    <Container>
      <DefaultHeader title="Feed" navigation={props.navigation} />
      <Content>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Digite algo...."
          value={content}
          onChangeText={text => setContent(text)}
        />
        <Button
          block
          primary
          style={{ margin: 10, height: 35 }}
          onPress={handlePost}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text>Publicar</Text>
          )}
        </Button>
        <FlatList
          data={postsRedux.posts}
          refreshing={refresh}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            loading && <ActivityIndicator size="small" color="#999" />
          }
          onEndReachedThreshold={0.05}
        />
      </Content>
    </Container>
  );
}

FeedSocial.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: <Icon name="paper" size={25} />,
};
