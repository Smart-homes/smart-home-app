import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// const RoomRegistretion = ({ navigation }) => {
export default class RoomRegistretion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      roomId: '',
    }

  };
  onNameChange = (e) => {
    this.setState({ roomName: e });
  }
  onIdChange = (e) => {
    this.setState({ roomId: e });
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded style={styles.field}>
              <Input
                placeholder='Room Name'
                onChangeText={this.onNameChange.bind(this)}
              />
            </Item>
            <Item rounded style={styles.field}>
              <Input
                onChangeText={this.onIdChange}
                placeholder='Room-ID'
              />
            </Item>
            {/* // onPress={() => navigation.navigate('RoomSelection')} */}
            <Button
              rounded style={styles.btn}
              // onPress={this.props.onAddRoom}
              onPress={() => {
                //console.log(this.props.route);
                this.props.route.params.onAddRooms({ title: this.state.roomName });
                this.props.navigation.navigate('RoomSelection',
                  // { title: this.state.roomName, roomId: this.state.roomId }
                );
              }}>
              <Text>Add Rooms</Text>
            </Button>
          </Form>
        </LinearGradient>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    marginTop: '35%',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    justifyContent: 'space-around',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'center',
    // position: 'absolute',
  },
  gradient: {
    flex: 1,
  }
});
// export default RoomRegistretion;