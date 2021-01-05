import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DevicesButton from './DeviceButton';
import { Button, Icon, Text } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';

export default class RoomSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { title: 'room1' },
        { title: 'room2' },
        { title: 'room3' },
        { title: 'room4' },
      ],
    };
  }

  render() {
    var rooms = this.state.rooms.map((room) =>
      <DevicesButton
        style={styles.roombtn}
        title={room.title}
        onPress={() => this.props.navigation.navigate('Devices')}
      // console.log("Makle API cdall")}
      >
      </DevicesButton>
    );
    // console.log(rooms);
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          {rooms}
        </LinearGradient>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  roombtn: {
    alignSelf: 'center',
    alignContent: 'center',
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

  // export default RoomSelection;