import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
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
          <Item  rounded last  style={styles.field}>
            <Input placeholder="Username"/>
          </Item>
          <Item  rounded last style={styles.field}>
            <Input placeholder="Password" />
          </Item>
          {/* <StyleProvider style={buttonTheme()}> */}
            <Button rounded
              onPress={() =>
              this.props.navigation.navigate('form')}>
              <Text last>Sign In</Text>
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
      justifyContent:'space-around',
      marginBottom: '5%',
      marginLeft:'5%',
      marginRight:'5%',
      backgroundColor:'#fff',
    },
    button:{
      // marginLeft:'30%',
      // width:'30%',
    },
    gradient: {
      flex: 1,
    }
  });
  // export default SignInScreen;