import React, { PureComponent } from 'react';
import { Navbar, NavbarGroup, Button, Alignment, Menu, MenuItem, Popover, NavbarHeading, ControlGroup, NavbarDivider } from '@blueprintjs/core';
import { InputGroup } from '@blueprintjs/core';
import firebase from 'firebase';

class AppNavbar extends PureComponent {
  renderLocationMenu() {
    return (
      <Menu>
        {this.props.cities.data.map(city =>
          <MenuItem key={city.id} icon="circle" text={city.name + ', ' + city.state} />
        )}
      </Menu>
    );
  }

  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            Arryved
          </NavbarHeading>

          <Popover content={this.renderLocationMenu()}>
            <Button icon="map-marker" text="St. Louis, MO" rightIcon="caret-down" />
          </Popover>
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          {
            firebase.auth().currentUser &&
            <Button
              icon="user"
              minimal
            />
          }

          {
            firebase.auth().currentUser &&
            <Button
              onClick={this.props.onLogout}
              icon="log-out"
              minimal
            />
          }
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default AppNavbar;