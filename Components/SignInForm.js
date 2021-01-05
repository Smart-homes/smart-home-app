import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// import buttonTheme from './Themes/buttonTheme';
// import { Text } from 'react-native';
// const SignInScreen = ({ navigation }) => {

export default class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded last style={styles.field}>
              <Input placeholder="Username" />
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder="Password" />
            </Item>
            <Button rounded style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('home')}>
              <Text last>Sign In</Text>
            </Button>
            <Button transparent style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('register')}>
              <Text last>Rergister</Text>
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
  // export default SignInScreen;