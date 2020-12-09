import React from 'react';
import { Button, View } from 'react-native';
import { Form, Item, Input } from 'native-base';

const RoomRegistretion = ({ navigation }) => {
    return (
      <View>
          <Form>
            <Item rounded>
              <Input placeholder='Room'/>
            </Item>

            <Item rounded>
              <Input placeholder='Room-ID'/>
            </Item>

            <Button
              title="Verify"
              onPress={() =>
                navigation.navigate('Devices')
              }
              // onPress={() => this.props.navigation.navigate('RoomSelection')}
              >
            </Button>

            <Button title="Add More Room" onPress={() =>
                navigation.navigate('RoomSelection')}
            />

          </Form>
      </View>
    );
  };

  export default RoomRegistretion;