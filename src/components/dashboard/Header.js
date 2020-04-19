import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Menu borderless inverted fluid fixed='top'>
        <Menu.Item header as='a'>
          My Dashboard
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a'>Settings</Menu.Item>
          <Menu.Item as='a'>Menu Item</Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
