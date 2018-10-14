import React, { PureComponent } from 'react';
import firebase from 'firebase';
import { PostsSearchContainer as PostsSearch } from '.';
import { PostWrapper, Post, PostTitle, PostBody } from './PostsComponents';
import { Icon, Button } from '@blueprintjs/core';

class Posts extends PureComponent {
  state = {
    posts: {
      data: [],
      loading: true
    }
  }

  async componentDidMount() {
    const db = firebase.firestore();
    const auth = firebase.auth();
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    const userSnapshot = await userRef.get();
    const cityRef = userSnapshot.data().city;
    const communityRef = userSnapshot.data().community;
    const categoryRef = db.collection('categories').doc(this.props.match.params.category)
    
    const postsRef = (
      db.collection('posts').where(
        'category',
        '==',
        categoryRef
      ).where(
        'city',
        '==',
        cityRef
      ).where(
        'community',
        '==',
        communityRef
      )
    );

    postsRef.onSnapshot(postsSnapshot => {
      const allPosts = postsSnapshot.docs.map(post => ({ id: post.id, ...post.data() }));
      this.setState({ posts: { loading: false, data: allPosts } });
    });
  }

  renderPost(post) {
    return (
      <Post key={post.id} onClick={() => this.props.history.push('/posts/' + post.id)}>
        <div style={{ flex: 1 }}>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body.substr(0, 256)}</PostBody>
        </div>

        <Icon icon="chevron-right" />
      </Post>
    );
  }

  render() {
    return (
      <PostWrapper>
        <PostsSearch currentCategoryId={this.props.match.params.category} />
        <div style={{ padding: '0 10px', marginBottom: 10 }}>
          <Button
            icon="add"
            text="Add a Post"
            onClick={() => this.props.history.push('/add-post')}
            fill
            large
          />
        </div>
        {this.state.posts.data.map(this.renderPost.bind(this))}
      </PostWrapper>
    );
  }
}

export default Posts;