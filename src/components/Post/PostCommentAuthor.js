import React, { PureComponent } from 'react';
import { Tag } from '@blueprintjs/core';

class PostCommentAuthor extends PureComponent {
  render() {
    if(this.props.author.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="post-author-wrapper">
        <div className="avatar">
          <img className="img-avatar" src={this.props.author.data.picture} />
        </div>
        <div className="avatar-blurb">
          <div className="avatar-title-wrapper">
            <p className="avatar-name">{this.props.author.data.name}</p>
            <div className="tag-wrapper">
              {this.props.author.data.tags && this.props.author.data.tags.map((tag, index) => <Tag minimal key={index}>{tag}</Tag>)}
            </div>
          </div>
          <p className="bp3-text-disabled avatar-bio">{this.props.author.data.bio}</p>
        </div>
      </div>
    )
  }
}

export default PostCommentAuthor;
