import React, { Component } from 'react';
import { AddPostWrapper, PostContentTextArea } from './AddPostComponents';
import { FormGroup, InputGroup, Intent, Button, HTMLSelect } from '@blueprintjs/core';

class AddPost extends Component {
  render() {
    const { t } = this.props;

    return (
      <AddPostWrapper onSubmit={this.props.onSubmit}>
        <FormGroup
          label={t('Title')}
          labelInfo={t('(required)')}
        >
          <InputGroup
            placeholder={t('Title')}
            value={this.props.title}
            onChange={this.props.onTitleChange}
            fill
            large
            required
          />
        </FormGroup>

        <FormGroup
          label={t('Post Content')}
          labelInfo={t('(required)')}
        >
          <PostContentTextArea
            placeholder={t('Ask a question, share advice, or post a job listing...')}
            value={this.props.body}
            onChange={this.props.onBodyChange}
            fill
            large
            required
          />
        </FormGroup>

        <FormGroup
          label={t('Category')}
          labelInfo={t('(required)')}
        >
          <HTMLSelect
            value={this.props.category}
            onChange={this.props.onCategoryChange}
            fill
            large
          >
            <option value="" disabled hidden>
              {t('Choose a Category')}
            </option>
            {this.props.categories.data.map(category =>
              <option key={category.id} value={category.id}>{category.name}</option>
            )}
          </HTMLSelect>
        </FormGroup>

        <Button
          intent={Intent.PRIMARY}
          text={t('Create Post')}
          type="submit"
          fill
          large
        />
      </AddPostWrapper>
    );
  }
}

export default AddPost;
