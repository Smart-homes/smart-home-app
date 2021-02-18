import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// const DeviceRegistration = ({ navigation }) => {
export default class DeviceRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: '',
      deviceId: '',
    }

  };
  onNameChange = (e) => {
    this.setState({ deviceName: e });
  }
  onIdChange = (e) => {
    this.setState({ deviceId: e});
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded style={styles.field}>
              <Input
                placeholder='device Name'
                onChangeText={this.onNameChange.bind(this)}
              />
            </Item>
            <Item rounded style={styles.field}>
              <Input
                onChangeText={this.onIdChange}
                placeholder='pin number(1-4)'
              />
            </Item>
            {/* // onPress={() => navigation.navigate('deviceSelection')} */}
            <Button
              rounded style={styles.btn}
              // onPress={this.props.onAdddevice}
              onPress={() => {
                //console.log(this.props.route);
                this.props.route.params.onAdddevices({ title: this.state.deviceName, pin: this.state.deviceId });
                this.props.navigation.navigate('Devices',
                  // { title: this.state.deviceName, deviceId: this.state.deviceId }
                )
              }}>
              <Text>Add devices</Text>
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
// export default DeviceRegistration;