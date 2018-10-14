import React, { PureComponent } from 'react';
import PostCommentAuthor from './PostCommentAuthorContainer';

class PostComment extends PureComponent {
  getTimeAgo() {

  }

  render() {
    console.log(this.props);
    return (
      <div className="comment-wrapper" key={this.props.comment.id}>
        <div className="post-comment-author-wrapper">
          <PostCommentAuthor id={this.props.comment.user.id} />
          <div className="post-comment-author-timestamp">
            {this.getTimeAgo(this.props.comment.createdOn)}
          </div>
        </div>
        <div className="comment-text-wrapper">
          {this.props.comment.text}
        </div>
      </div>
    )
  }
}

export default PostComment;
