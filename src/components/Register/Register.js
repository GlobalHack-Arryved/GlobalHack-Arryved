import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContainer, RegisterPage, RegisterHero, RegisterContent, RegisterError, RegisterActions, RegisterSteps, RegisterStep, RegisterIcon } from './RegisterComponents';
import { FormGroup, HTMLSelect, InputGroup, Button, Intent, Icon } from '@blueprintjs/core';

class Register extends Component {
  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
            <RegisterSteps>
              <RegisterStep active>1</RegisterStep>
              <RegisterStep>2</RegisterStep>
              <RegisterStep>3</RegisterStep>
              <RegisterStep>4</RegisterStep>
            </RegisterSteps>

            <RegisterIcon>
              <Icon icon="user" color="#FFF" iconSize={48} />
            </RegisterIcon>

            <h1>{t('Register')}</h1>
            <p className="bp3-text-muted">{t('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.')}</p>
          </RegisterHero>

          <RegisterContent onSubmit={this.props.onSubmit}>
            <RegisterError visible={this.props.error}>
              {this.props.error}
            </RegisterError>

            <FormGroup
              label={t('Email')}
              labelFor="email"
              labelInfo={t('(required)')}
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
              labelInfo={t('(required)')}
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

            <FormGroup
              label={t('Language')}
              labelInfo={t('(required)')}
            >
              <HTMLSelect
                value={this.props.language}
                onChange={this.props.onLanguageChange}
                fill
                large
              >
                {this.props.languages.data.map(language =>
                  <option key={language.id} value={language.id}>{language.name}</option>
                )}
              </HTMLSelect>
            </FormGroup>

            <RegisterActions>
              <Button
                intent={Intent.PRIMARY}
                text={t('Create Account')}
                type="submit"
                fill
                large
              />
            </RegisterActions>
          </RegisterContent>
        </RegisterContainer>
      </RegisterPage>
    );
  }
}

export default Register;
