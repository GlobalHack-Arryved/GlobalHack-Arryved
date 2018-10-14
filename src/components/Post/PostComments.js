import React, { PureComponent } from 'react';
import PostComment from './PostCommentContainer';

class PostComments extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className="comments-wrapper">
        { this.props.comments.data.map(comment => <PostComment comment={comment} />) }
      </div>
    );
  }
}

export default PostComments;
