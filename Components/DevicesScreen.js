import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from "native-base";
import DevicesButton from './DeviceButton';
import { LinearGradient } from 'expo-linear-gradient';
// const DevicesScreen = ({ navigation, route }) => {
export default class DevicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [
        { title: 'T.V' },
        { title: 'Fan' },
        { title: 'A.C' },
      ]
    }
  };
  render() {
    var devices = this.state.devices.map((device) =>
      <DevicesButton
        style={styles.roombtn}
        title={device.title}
        onPress={() => this.props.navigation.navigate('Devices')}>
      </DevicesButton>
    );
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          {devices}
          <Button style={styles.add}>
            <Icon
              name='add' size={24}
            // onPress={() =>
            //   this.props.navigation.navigate('Room', { onAddRooms: this.onAddRooms })} 
            />
          </Button>
          {/* <DeviceButton title="Fan"
            onPress={() => console.log("make function call to function that does API call")}>
          </DeviceButton> */}
          {/* <Text>This is { route.params.name }'s profile</Text> */}
        </LinearGradient>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    // left: 50,
  },
  gradient: {
    flex: 1,
  }
});

  // export default DevicesScreen;