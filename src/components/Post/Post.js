import React, { Component } from 'react';
import PostAuthor from './PostAuthorContainer';
import PostComments from './PostComments';
import moment from 'moment-with-locales-es6';
import './post.css';


class Post extends Component {
  getTimeAgo = (timestamp) => {
    const { i18n } = this.props;
    moment.locale(i18n.language);
    return moment('' + timestamp, 'X').fromNow();
  };

  render() {
    const { t } = this.props;

    if(this.props.posts.loading) {
      return (
        <div className="main-post-wrapper">
          Loading...
        </div>
      );
    }

    return (
      <div className="main-post-wrapper">
        <div className="header-wrapper">
          <div className="title-wrapper">
            <h2 className="main-post-title">{this.props.posts.data.title}</h2>
            <p className="bp3-text-disabled time-ago">
              {t('Posted')} {this.getTimeAgo(this.props.posts.data.createdOn.seconds)}
            </p>
          </div>
          <PostAuthor id={this.props.posts.data.user.id} />
          <div className="description-wrapper">
            <h3 className="description-header">
              {t('Description')}
            </h3>
            <p className="description">{this.props.posts.data.body}</p>
          </div>
          <PostComments comments={this.props.comments} />
        </div>
      </div>
    )
  }
}

export default Post;
