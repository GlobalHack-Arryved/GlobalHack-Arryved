import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  RegisterContainer,
  RegisterPage,
  RegisterHero,
  RegisterContent,
  RegisterError,
  RegisterActions
} from '../RegisterComponents';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

class Profile extends Component {
  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
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
            >
              <InputGroup
                id="name"
                type="name"
                placeholder={t('Name (optional)')}
                value={this.props.name}
                onChange={this.props.onNameChange}
              />
            </FormGroup>

            <FormGroup
              label={t('Bio')}
              labelFor="bio"
            >
              <InputGroup
                id="bio"
                type="bio"
                placeholder={t('Bio (optional)')}
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

              <Link to="/login">
                {t('Already have an account?')}
              </Link>
            </RegisterActions>
          </RegisterContent>
        </RegisterContainer>
      </RegisterPage>
    );
  }
}

export default Profile;
