import React, { Component } from 'react';
import { LoginContainer, LoginPage, LoginHero, LoginContent, LoginError } from './LoginComponents';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

class Login extends Component {
  render() {
    return (
      <LoginPage>
        <LoginContainer>
          <LoginHero>
            <h1>Sign in!</h1>

            <p className="bp3-text-muted bp3-text-small">
              Need an account? You can create one in the <a href="https://console.firebase.google.com/u/3/project/globalhack-vii-yeti/authentication/users" target="_blank">Firebase dashboard</a>.
            </p>
          </LoginHero>

          <LoginContent onSubmit={this.props.onSubmit}>
            <LoginError visible={this.props.error}>
              {this.props.error}
            </LoginError>

            <FormGroup
              label="Email"
              labelFor="email"
            >
              <InputGroup
                id="email"
                type="email"
                placeholder="someone@gmail.com"
                value={this.props.email}
                onChange={this.props.onEmailChange}
                required
              />
            </FormGroup>

            <FormGroup
              label="Password"
              labelFor="password"
            >
              <InputGroup
                id="password"
                type="password"
                placeholder="Password"
                value={this.props.password}
                onChange={this.props.onPasswordChange}
                required
              />
            </FormGroup>

            <Button
              intent={Intent.PRIMARY}
              text="Sign In"
              type="submit"
            />
          </LoginContent>
        </LoginContainer>
      </LoginPage>
    );
  }
}

export default Login;
