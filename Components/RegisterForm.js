import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';

// const RegisterForm = ({ navigation }) => {
export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      city: '',
    };
  }

  onFirstNameChange = (text) => {
    this.state.first_name = text;
    this.setState(this.state);
  }

  onLastNameChange = (text) => {
    this.state.last_name = text;
    this.setState(this.state);
  }

  onCityChange = (text) => {
    this.state.city = text;
    this.setState(this.state);
  }

  onEmailChange = (text) => {
    this.state.email = text;
    this.setState(this.state);
  }

  onPasswordChange = (text) => {
    this.state.password = text;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded last style={styles.field}>
              <Input placeholder='First Name' onChangeText={this.onFirstNameChange} />
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='Last Name' onChangeText={this.onLastNameChange} />
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='City' onChangeText={this.onCityChange} />
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='Email' onChangeText={this.onEmailChange} />
            </Item>
            <Item rounded last style={styles.field} >
              <Input placeholder='Password' onChangeText={this.onPasswordChange} />
            </Item>
            <Button
              rounded style={styles.btn}
              onPress={() => {
                //TODO: validate first
                //get token from server
                fetch('https://lazypanda-api.herokuapp.com/register', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    city: this.state.city,
                    email: this.state.email,
                    password: this.state.password
                  })
                }).then((response) => {
                  return response.json()
                }).then((json) => {
                  //store token
                  console.log("Is Secure store API available: ", SecureStore.isAvailableAsync());
                  SecureStore.setItemAsync("user_token", json.res).then(() => {
                    this.props.navigation.navigate('RoomSelection');
                  }).catch((err) => {
                    console.log(err);
                    alert("Error occured while logging in");
                  });
                  //navigate
                  //console.log(json);
                  //this.props.navigation.navigate('RoomSelection')
                }
                ).catch((err) => console.log(err));
              }
              }>
              <Text> REGISTER </Text>
            </Button>
            <Button rounded style={styles.btn} //TODO: change style
              onPress={() =>
                this.props.navigation.navigate('Signin')}>
              <Text last>    SignIn    </Text>
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
    marginTop: '5%',
    // position: 'absolute',
  },
  gradient: {
    flex: 1,
  },
});

  // export default RegisterForm;