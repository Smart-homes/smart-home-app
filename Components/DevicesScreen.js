import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from "native-base";
import DevicesButton from './DeviceButton';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';
// const DevicesScreen = ({ navigation, route }) => {
export default class DevicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [
      ]
    }
    this.room_id = this.props.route.params.room_id;
    //console.log("now?");

    SecureStore.getItemAsync("user_token").then((val) => {
      fetch('https://lazypanda-api.herokuapp.com/app/devices/list', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          room_id: this.room_id,
          token: val
        })
      }).then((response) => response.json()).then((res) => {
        //console.log(res);
        if (res.err) {
          console.log("server error. weird. token: ", val);
          alert(res.err);
          this.props.navigation.navigate("Home");
        } else {
          this.state.devices = res;
          this.setState(this.state);
          //console.log(this.state);
        }
      }
      ).catch((err) => console.log(err));

    }).catch((err) => console.log(err));

  }
  onAdddevices = (device) => {
    // console.log('yetay')
    //this.setState(divices = { title: 'dev4' });
    // console.log(this.state.rooms);
    var room_id = this.room_id;
    SecureStore.getItemAsync("user_token").then(function (val) {

      fetch('https://lazypanda-api.herokuapp.com/app/devices/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: device.title,
          pin: device.pin,
          room_id: room_id,
          token: val
        })
      }).then((response) => response.json()).then((res) => {
        //store token
        //navigate
        if (res.err) {
          alert(res.err);
        } else {

          //maybe comment out the two lines below?
          this.state.devices.push(device);
          this.setState({ devices: this.state.devices });
        }
      }
      ).catch((err) => console.log(err));
    });
    //  console.log(":)");
    //  console.log(this.state.rooms);
  }

  controlDevice = function (device) {
    var room_id = this.room_id;
    SecureStore.getItemAsync("user_token").then(function (val) {

      fetch('https://lazypanda-api.herokuapp.com/app/devices/control', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          device_id: device._id,
          pin: device.pin,
          room_id: room_id,
          token: val,
        })
      }).then((response) => response.json()).then((res) => {
        //store token
        //navigate
        if (res.err) {
          alert(res.err);
        } else {
          //maybe success box or something?
        }
      }
      ).catch((err) => console.log(err));
    });
  }

  render() {
    var devices = this.state.devices.map((device) =>
      <DevicesButton
        style={styles.roombtn}
        title={device.title}
        onPress={() => {
          this.controlDevice(device);
        }}>
      </DevicesButton>
    );
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          {devices}
          <Button style={styles.add}>
            <Icon
              name='add' size={24}
              onPress={() =>
                this.props.navigation.navigate('Device', { onAdddevices: this.onAdddevices })}
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