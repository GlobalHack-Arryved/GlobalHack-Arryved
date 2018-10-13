import React, { PureComponent } from 'react';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Alignment } from '@blueprintjs/core';
import firebase from 'firebase';

class AppNavbar extends PureComponent {
  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            GlobalHack VII
          </NavbarHeading>
          
          <NavbarDivider />

          <Button
            onClick={() => this.props.history.push('/')}
            icon="home"
            text="Home"  
            minimal
          />
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          {
            firebase.auth().currentUser &&
            <Button
              onClick={this.props.onLogout}
              text="Logout"  
              minimal
            />
          }
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default AppNavbar;