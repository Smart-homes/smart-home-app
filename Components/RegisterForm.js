import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// const RegisterForm = ({ navigation }) => {
export default class RegisterForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded last style={styles.field}>
              <Input placeholder='First Name'/>
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='Last Name'/>
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='City'/>
            </Item>
            <Item rounded last style={styles.field}>
              <Input placeholder='Email'/>
            </Item>
            <Item rounded last style={styles.field} >
              <Input placeholder='Password'/>
            </Item>
            <Button
              rounded 
              onPress={() =>
                this.props.navigation.navigate('Room')
              }>
                <Text>Register</Text>
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
      justifyContent:'center',
    },
    field: {
      justifyContent:'space-around',
      marginBottom: '5%',
      marginLeft:'5%',
      marginRight:'5%',
      backgroundColor:'#fff',
    },
    gradient: {
      flex: 1,
    },
  });
  
  // export default RegisterForm;