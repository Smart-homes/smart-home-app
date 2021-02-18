import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';

// import buttonTheme from './Themes/buttonTheme';
// import { Text } from 'react-native';
// const SignInScreen = ({ navigation }) => {

export default class SignInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSignIn = (e) => {
    var { username, password } = this.state;
    fetch('https://lazypanda-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password: password,
      })
    }).then((response) => response.json()).then((res) => {
      //store token
      //navigate
      if (res.err) {
        alert(res.err);
      } else {
        //add condition for when secure store api is unavailable then use async storage
        console.log("Is Secure store API available: ", SecureStore.isAvailableAsync());
        SecureStore.setItemAsync("user_token", res.res).then(() => {
          this.props.navigation.navigate('RoomSelection');
        }).catch((err) => {
          console.log(err);
          alert("Error occured while logging in");
        });
      }
    }
    ).catch((err) => console.log(err));
  }

  updateUsername = (text) => {
    this.setState({ username: text });
  }

  updatePassword = (text) => {
    this.setState({ password: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded last style={styles.field}>
              <Input placeholder="Username" onChangeText={this.updateUsername} />
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder="Password" onChangeText={this.updatePassword} />
            </Item>
            {/* <StyleProvider style={buttonTheme()}> */}
            <Button rounded style={styles.btn}
              onPress={() => {
                // this.props.navigation.navigate("RoomSelection");
                this.handleSignIn()
              }}>
              <Text last>    SignIn    </Text>
            </Button>


            <Button rounded style={styles.btn} //TODO: change style
              onPress={() =>
                this.props.navigation.navigate('form')}>
              <Text last> Register </Text>
            </Button>
            {/* </StyleProvider> */}
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
  }
});
  // export default SignInScreen;