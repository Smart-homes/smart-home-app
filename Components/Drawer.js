import React, { Component } from 'react';
import SideBar from './Sidebar';
import { Drawer, Text } from 'native-base';
export default class DrawerExample extends Component {
  closeDrawer = () => {
    this.drawer._root.close()

  };
  openDrawer() { this.drawer._root.open() };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator}
        />
        }
        onClose={() => this.closeDrawer()}>
        <Text>YO BIITCH</Text>
      </Drawer>
    );
  }
}

