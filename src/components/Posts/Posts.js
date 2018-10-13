import React, { PureComponent } from 'react';
import { PostWrapper, Post, PostTitle, PostBody } from './PostsComponents';
import { Icon } from '@blueprintjs/core';

class Posts extends PureComponent {
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
        {this.props.posts.data.map(this.renderPost.bind(this))}
      </PostWrapper>
    );
  }
}

export default Posts;