import React, { PureComponent } from 'react';
import PostCommentAuthor from './PostCommentAuthorContainer';
import moment from 'moment-with-locales-es6';

class PostComment extends PureComponent {
  getTimeAgo = (timestamp) => {
    const { i18n } = this.props;
    moment.locale(i18n.language);
    return moment('' + timestamp, 'X').fromNow();
  };

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
