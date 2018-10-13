import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  RegisterContainer,
  RegisterPage,
  RegisterHero,
  RegisterContent,
  RegisterError,
  RegisterActions,
  RegisterSteps,
  RegisterStep,
  RegisterIcon
} from '../RegisterComponents';
import { FormGroup, InputGroup, Button, Intent, Icon } from '@blueprintjs/core';

class Profile extends Component {
  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
            <RegisterSteps>
              <RegisterStep>1</RegisterStep>
              <RegisterStep>2</RegisterStep>
              <RegisterStep active>3</RegisterStep>
              <RegisterStep>4</RegisterStep>
            </RegisterSteps>

            <RegisterIcon>
              <Icon icon="user" color="#FFF" iconSize={48} />
            </RegisterIcon>

            <h1>{t('Profile')}</h1>
            <p>{t('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.')}</p>
          </RegisterHero>

          <RegisterContent onSubmit={this.props.onSubmit}>
            <RegisterError visible={this.props.error}>
              {this.props.error}
            </RegisterError>

            <FormGroup
              label={t('Name')}
              labelFor="name"
              labelInfo={t('(optional)')}
            >
              <InputGroup
                id="name"
                type="name"
                placeholder={t('Name')}
                value={this.props.name}
                onChange={this.props.onNameChange}
              />
            </FormGroup>

            <FormGroup
              label={t('Bio')}
              labelFor="bio"
              labelInfo={t('(optional)')}
            >
              <InputGroup
                id="bio"
                type="bio"
                placeholder={t('Bio')}
                value={this.props.bio}
                onChange={this.props.onBioChange}
              />
            </FormGroup>

            <RegisterActions>
              <Button
                intent={Intent.PRIMARY}
                text={t('Next')}
                type="submit"
              />
            </RegisterActions>
          </RegisterContent>
        </RegisterContainer>
      </RegisterPage>
    );
  }
}

export default Profile;
