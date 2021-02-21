import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DevicesButton from './DeviceButton';
import SideBar from './Sidebar';
import { Button, Icon, Text } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';
export default class RoomSelection extends Component {

  constructor(props) {
    super(props);

    //first check if rooms data exists
    //then check if there's newer data available online
    //if yes, take new data
    //if not, use the existing data to populate below.
    this.state = {
      rooms: [
        //   {
        //     id: 1,
        //     title: 'room1',
        //   },
      ],
    };

    //make API call here to get room data
    SecureStore.getItemAsync("user_token").then((val) => {
      fetch('https://lazypanda-api.herokuapp.com/app/rooms/list', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: val
        })
      }).then((response) => response.json()).then((res) => {
        if (res.err) {
          console.log("server error. weird. token: ", val);
          alert(res.err);
          this.props.navigation.navigate("Signin");
        } else {
          this.state.rooms = res;
          this.setState(this.state);
          //console.log(this.state);
        }
      }
      ).catch((err) => {
        console.log(err);
        alert("Error while gathering data. Try again.");
      });
    }).catch((err) => {
      console.log(err);
      alert("Error. Try logging in again");
      this.props.navigation.navigate('Signin');
    });
  }
  onAddRooms(room) {
    // console.log('yetay')
    //this.setState(divices = { title: 'dev4' });
    // console.log(this.state.rooms);
    SecureStore.getItemAsync("user_token").then((val) => {
      fetch('https://lazypanda-api.herokuapp.com/app/rooms/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: room.title,
          token: val
        })
      }).then((response) => response.json()).then((res) => {
        //store token
        //navigate
        if (res.err) {
          alert(res.err);
        } else {

          //maybe comment out the two lines below?
          this.state.rooms.push(room);
          this.setState({ rooms: this.state.rooms });
        }
      }
      ).catch((err) => console.log(err));
    });
    //  console.log(":)");
    //  console.log(this.state.rooms);
  }
  render() {
    var rooms = this.state.rooms.map((room) =>
      <DevicesButton
        style={styles.roombtn}
        title={room.title}
        onPress={() => this.props.navigation.navigate('Devices', { room_id: room._id })}
      // console.log("Makle API cdall")}
      >
      </DevicesButton>
    );
    // console.log(rooms);
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          {rooms}
          <Button style={styles.add}
            onPress={() =>
              this.props.navigation.navigate('Room', { onAddRooms: this.onAddRooms })} >
            <Icon
              name='add' size={24} />
          </Button>
        </LinearGradient>
      </View >
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roombtn: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  add: {
    alignSelf: 'center',
    alignContent: 'center',
    position: 'relative',
    // bottom: 40,
    left: 50,
  },

  gradient: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

  // export default RoomSelection;