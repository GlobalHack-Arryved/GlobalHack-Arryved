import React, { PureComponent } from 'react';

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
          <p className="avatar-name">{this.props.author.data.name}</p>
          <p className="bp3-text-disabled avatar-bio">{this.props.author.data.bio}</p>
        </div>
      </div>
    )
  }
}

export default PostCommentAuthor;
