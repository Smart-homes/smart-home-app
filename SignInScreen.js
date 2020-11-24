
import React from 'react';
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SignInScreen = ({ navigation }) => {
    return (
      <View>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <Button
        title="Sign in"
        onPress={() =>
          navigation.navigate('Devices', { name: 'Jane' })
        }
      >
        Sign in
      </Button>
      </View>
    );
  };

  export default SignInScreen;