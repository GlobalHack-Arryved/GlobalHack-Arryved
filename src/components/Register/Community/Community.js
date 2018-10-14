import React, { PureComponent } from 'react';
import { RegisterContainer, RegisterPage, RegisterHero, RegisterContent } from '../RegisterComponents';
import { RegisterError, RegisterActions, RegisterSteps, RegisterStep, RegisterIcon } from '../RegisterComponents';
import { FormGroup, Icon, MenuItem, HTMLSelect, Button, Intent } from '@blueprintjs/core';

class Community extends PureComponent {
  renderNonIdealState() {
    const { t } = this.props;

    return (
      <div style={{ padding: 10 }}>
        <p style={{ margin: 0, textAlign: 'center' }}>
          No Results
        </p>
      </div>
    )
  }

  renderItem(city) {
    return <MenuItem key={city.id} text={`${city.name}, ${city.state}`} />;
  }

  render() {
    const { t } = this.props;

    return (
      <RegisterPage>
        <RegisterContainer>
          <RegisterHero>
            <RegisterSteps>
              <RegisterStep>1</RegisterStep>
              <RegisterStep active>2</RegisterStep>
              <RegisterStep>3</RegisterStep>
              <RegisterStep>4</RegisterStep>
            </RegisterSteps>

            <RegisterIcon>
              <Icon icon="people" color="#FFF" iconSize={48} />
            </RegisterIcon>

            <h1>{t('Community')}</h1>
            <p>{t('Community is where you hang your hat after a long day of rest.')}</p>
          </RegisterHero>

          <RegisterContent onSubmit={this.props.onSubmit}>
            <RegisterError visible={this.props.error}>
              {this.props.error}
            </RegisterError>

            <FormGroup
              label={t('City')}
              labelFor="city"
            >
              <HTMLSelect
                value={this.props.city}
                onChange={this.props.onCityChange}
                placeholder={t('City')}
                fill
              >
                <option value="" disabled hidden>
                  {t('Select a City')}
                </option>
                
                {this.props.cities.data.map(city =>
                  <option key={city.id} value={city.id}>{city.name}, {city.state}</option>
                )}
              </HTMLSelect>
            </FormGroup>

            <FormGroup
              label={t('Community')}
              labelFor="community"
            >
              <HTMLSelect
                value={this.props.community}
                onChange={this.props.onCommunityChange}
                placeholder={t('Community')}
                fill
              >
                <option value="" disabled hidden>
                  {t('Select a Community')}
                </option>

                {this.props.communities.data.map(commuunity =>
                  <option key={commuunity.id} value={commuunity.id}>{commuunity.name}</option>
                )}
              </HTMLSelect>
            </FormGroup>

            <RegisterActions>
              <Button
                text={t('Next')}
                intent={Intent.PRIMARY}
                type="submit"
              />
            </RegisterActions>
          </RegisterContent>
        </RegisterContainer>
      </RegisterPage>
    );
  }
}

export default Community;