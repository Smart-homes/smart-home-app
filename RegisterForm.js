import React from 'react';
import { Button, View } from 'react-native';
import { Form, Item, Input } from 'native-base';

const RegisterForm = ({ navigation }) => {
    return (
      <View>
          <Form>
            <Item rounded>
              <Input placeholder='Email'/>
            </Item>
            <Item rounded>
              <Input placeholder='Name'/>
            </Item>
            <Item rounded>
              <Input placeholder='Password'/>
            </Item>
            <Button
              title="Register"
              onPress={() =>
                navigation.navigate('Room')
              }>
            </Button>
          </Form>
      </View>
    );
  };

  export default RegisterForm;