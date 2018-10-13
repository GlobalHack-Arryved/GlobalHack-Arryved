import React, { Component } from 'react';
import { LoginContainer, LoginPage, LoginHero, LoginContent, LoginError } from './LoginComponents';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

class Login extends Component {
  render() {
    const { t } = this.props;

    return (
      <LoginPage>
        <LoginContainer>
          <LoginHero>
            <h1>{t('Sign in!')}</h1>
            <p>{t('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.')}</p>
            
            <Button
              intent={Intent.PRIMARY}
              text={t('Create an Account')}
              onClick={() => this.props.history.push('/register')}
              fill
              large
            />
          </LoginHero>

          <LoginContent onSubmit={this.props.onSubmit}>
            <LoginError visible={this.props.error}>
              {this.props.error}
            </LoginError>

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

            <Button
              intent={Intent.PRIMARY}
              text={t('Sign In')}
              type="submit"
            />
          </LoginContent>
        </LoginContainer>
      </LoginPage>
    );
  }
}

export default Login;
