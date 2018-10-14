import React, { PureComponent } from 'react';
import firebase from 'firebase';
import { ProfileWrapper, UserNameAndLocation, ProfileOption, DeleteProfileWrapper, ProfilePictureWrapper, ProfilePicture } from './ProfileComponents';
import { CityAndStateContainer as CityAndState } from '.';
import { Spinner, Button, Intent } from '@blueprintjs/core';

class Profile extends PureComponent {
  render() {
    const { t } = this.props;

    if (this.props.profile.loading) {
      return <Spinner />;
    }

    return (
      <ProfileWrapper>
        <ProfilePictureWrapper>
          <ProfilePicture src={this.props.profile.data.picture} alt={this.props.profile.data.name} />
        </ProfilePictureWrapper>

        <UserNameAndLocation>
          <h2>{this.props.profile.data.name}</h2>
          <CityAndState cityId={this.props.profile.data.city.id} />
        </UserNameAndLocation>

        <ProfileOption>
          <h4>{t('Email')}</h4>
          <p className="bp3-text-large">{firebase.auth().currentUser.email}</p>
        </ProfileOption>

        <ProfileOption>
          <h4>{t('Password')}</h4>
          <p className="password bp3-text-large">······················</p>
        </ProfileOption>

        <ProfileOption>
          <h4>{t('Bio')}</h4>
          <p className="bp3-text-large">{this.props.profile.data.bio}</p>
        </ProfileOption>

        <DeleteProfileWrapper>
          <Button
            intent={Intent.DANGER}
            text={t('Delete My Account')}
            large
            fill
            minimal
          />
        </DeleteProfileWrapper>
      </ProfileWrapper>
    );
  }
}

export default Profile;