import React, { PureComponent } from 'react';
import { Tag } from '@blueprintjs/core';

class PostAuthor extends PureComponent {

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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <p className="avatar-name">{this.props.author.data.name}</p>
            {this.props.author.data.tags && this.props.author.data.tags.map((tag, index) => <Tag  icon="small-tick" minimal key={index}>{tag}</Tag>)}
          </div>
          <p className="bp3-text-disabled avatar-bio">{this.props.author.data.bio}</p>
        </div>
      </div>
    )
  }
}

export default PostAuthor;
