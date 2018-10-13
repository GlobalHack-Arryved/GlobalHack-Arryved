import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContainer, RegisterPage, RegisterHero, RegisterContent, RegisterError, RegisterActions } from './RegisterComponents';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

class Register extends Component {
  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
            <h1>{t('Welcome to Nearby!')}</h1>
            <p>{t('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.')}</p>
          </RegisterHero>

          <RegisterContent onSubmit={this.props.onSubmit}>
            <RegisterError visible={this.props.error}>
              {this.props.error}
            </RegisterError>

            <FormGroup
              label={t('Email')}
              labelFor="email"
            >
              <InputGroup
                id="email"
                type="email"
                placeholder={t('someone@gmail.com')}
                value={this.props.email}
                onChange={this.props.onEmailChange}
                required
              />
            </FormGroup>

            <FormGroup
              label={t('Password')}
              labelFor="password"
            >
              <InputGroup
                id="password"
                type="password"
                placeholder={t('Password')}
                value={this.props.password}
                onChange={this.props.onPasswordChange}
                required
              />
            </FormGroup>

            <RegisterActions>
              <Button
                intent={Intent.PRIMARY}
                text={t('Create Account')}
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

export default Register;
