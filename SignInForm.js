import React from 'react';
import { Button, View } from 'react-native';
import { Form, Item, Input } from 'native-base';
// import { LinearGradient } from 'expo-linear-gradient';
const SignInScreen = ({ navigation }) => {
    return (
      <View>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
            <Button
              title="Sign in"
              onPress={() =>
                navigation.navigate('form')
              }>
            </Button>
        </Form>
      </View>
    );
  };

  export default SignInScreen;