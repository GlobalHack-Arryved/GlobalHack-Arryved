import React, { PureComponent } from 'react';
import { Navbar, NavbarGroup, Button, Alignment, Menu, MenuItem, Popover, NavbarHeading, ControlGroup, NavbarDivider } from '@blueprintjs/core';
import { InputGroup } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class AppNavbar extends PureComponent {
  state = {
    currentCity: null
  }

  async componentWillReceiveProps(newProps) {
    if (
      this.props.user.loading && 
      !newProps.user.loading &&
      newProps.user.data.city
    ) {
      const citySnapshot = await newProps.user.data.city.get();
      this.setState({ currentCity: { id: citySnapshot.id, ...citySnapshot.data() } })
    }
  }

  renderLocationMenu() {
    return (
      <Menu>
        {this.props.cities.data.map(city =>
          <MenuItem
            key={city.id}
            icon={this.state.currentCity.id === city.id ? "selection": "circle"}
            text={city.name + ', ' + city.state}
            onClick={async () => {
              const db = firebase.firestore();
              const currentUser = firebase.auth().currentUser;
              const cityRef = db.collection('cities').doc(city.id);
              const userRef = db.collection('users').doc(currentUser.uid);
              await userRef.update({ city: cityRef });
              document.location.reload();
            }}
          />
        )}
      </Menu>
    );
  }

  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Link to="/">
              <img src={require('./arryved.png')} style={{ marginBottom: -9 }} height={25}/>
            </Link>
          </NavbarHeading>

          {
            this.state.currentCity &&
            <Popover content={this.renderLocationMenu()}>
              <Button icon="map-marker" text={this.state.currentCity.name + ', ' + this.state.currentCity.state} rightIcon="caret-down" />
            </Popover>
          }
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          {
            firebase.auth().currentUser &&
            <Button
              onClick={() => this.props.history.push('/conversations')}
              icon="chat"
              minimal
            />
          }

          {
            firebase.auth().currentUser &&
            <Button
              onClick={() => this.props.history.push('/profile')}
              icon="user"
              minimal
            />
          }
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default AppNavbar;