import React, { PureComponent } from 'react';
import firebase from 'firebase';
import PostComment from './PostCommentContainer';
import { InputGroup } from '@blueprintjs/core';

class PostComments extends PureComponent {
  state = {
    comment: ''
  }

  onKeyPress = (e) => {
    if (e.which !== 13) return;
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    const postRef = db.collection('posts').doc(this.props.postId);
    const commentsRef = postRef.collection('comments');

    try {
      commentsRef.add({
        text: this.state.comment,
        createdOn: firebase.firestore.FieldValue.serverTimestamp(),
        user: firebase.firestore().collection('users').doc(currentUser.uid)
      });

      this.setState({ comment: '' });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const { t } = this.props;

    return (
      <div className="comments-wrapper">
        <div style={{ marginBottom: 10 }}>
          <InputGroup
            icon="chat"
            placeholder={t('Write a comment...')}
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            onKeyPress={this.onKeyPress}
            fill
            large
          />
        </div>

        { this.props.comments.data.map(comment => <PostComment comment={comment} />) }
      </div>
    );
  }
}

export default PostComments;
