import React, { Component } from 'react';
import { RegisterContainer, RegisterPage, RegisterHero, RegisterContent, RegisterError, RegisterActions, RegisterSteps, RegisterStep, RegisterIcon } from '../RegisterComponents';
import { HTMLSelect, Button, Intent, Menu, MenuItem, MenuDivider, FormGroup, Icon } from '@blueprintjs/core';

class Immigration extends Component {
  renderImmigrationStatusList() {
    return (
      <Menu>
        <MenuItem text="Citizen" />
        <MenuItem text="Naturalized Citizen" />
        <MenuItem text="Permanent Resident (Green Card)" />
        <MenuDivider title="Visas" />
        {this.props.visas.data.map(visa =>
          <MenuItem key={visa.id} text={visa.name} />
        )}
      </Menu>
    )
  }
  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
            <RegisterSteps>
              <RegisterStep>1</RegisterStep>
              <RegisterStep>2</RegisterStep>
              <RegisterStep>3</RegisterStep>
              <RegisterStep active>4</RegisterStep>
            </RegisterSteps>

            <RegisterIcon>
              <Icon icon="airplane" color="#FFF" iconSize={48} />
            </RegisterIcon>

            <h1>{t('Immigration')}</h1>
            <p>{t('Help Aryvved users understand where you are in your immigration journey.')}</p>
          </RegisterHero>

          <RegisterContent onSubmit={this.props.onSubmit}>
            <RegisterError visible={this.props.error}>
              {this.props.error}
            </RegisterError>

            <FormGroup
              label={t('Immigration Status')}
              helperText={t('This field is optional. If you prefer to not disclose this information, just click Next.')}
            >
              <HTMLSelect fill value={this.props.immigrationStatus} onChange={this.props.onImmigrationStatusChange}>
                <option value="" disabled hidden>
                  {t('Immigration Status')}
                </option>

                <option value="citizen">
                  {t('Citizen')}
                </option>

                <option value="naturalized-citizen">
                  {t('Naturalized Citizen')}
                </option>

                <option value="permanent-resident">
                  {t('Permanent Resident (Green Card)')}
                </option>

                <option value="visa">
                  {t('Visa')}
                </option>
              </HTMLSelect>
            </FormGroup>

            {
              this.props.immigrationStatus === 'visa' &&
              <FormGroup label={t('Visa Type')}>
                <HTMLSelect fill value={this.props.visaType} onChange={this.props.onVisaTypeChange}>
                  <option value="" disabled hidden>
                    {t('Visa Type')}
                  </option>

                  {this.props.visas.data.map(visa =>
                    <option key={visa.id} value={visa.id}>{visa.name}</option>
                  )}
                </HTMLSelect>
              </FormGroup>
            }

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

export default Immigration;
