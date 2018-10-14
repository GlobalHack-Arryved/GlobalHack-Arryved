import React, { Component } from 'react';
import { PageContainer } from '../Common/StyledComponents';
import CategorySelect from './CategorySelect';
import { RegisterError, SubmitButton, TextInput, TextArea, Form } from './AddPostComponents';
import { Spinner } from '@blueprintjs/core';

class AddPost extends Component {
  render() {
    if (this.props.categories.loading || this.props.user.loading) {
      return <Spinner />
    }

    const { t } = this.props;

    return (
      <PageContainer>
        <Form onSubmit={this.props.onSubmit}>
          <RegisterError error={this.props.error} />

          <TextInput onChange={this.props.onTitleChange} placeholder={t('Title')} />
          <TextArea onChange={this.props.onBodyChange} placeholder={t('Ask a question, share advice, or post a job listing...')} />

          <CategorySelect
            t={t}
            categories={this.props.categories}
            onCategoryChange={this.props.onCategoryChange}
          />

          <SubmitButton t={t} />
        </Form>
      </PageContainer>
    );
  }
}

export default AddPost;
