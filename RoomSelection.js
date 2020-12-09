import React from 'react';
// import { Button, StyleSheet,View } from 'react-native';
import { Icon,View, Picker, Form } from "native-base"


const RoomSelection = ({ navigation }) => {
    return (
      <View>
           <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your Room"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
            //   selectedValue={this.state.selected}
            //   onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Add Room" value="key0" />
              <Picker.Item label="Hall" value="key1" />
              <Picker.Item label="BedRoom" value="key2" />
              <Picker.Item label="Kitchen" value="key3" />
              <Picker.Item label="Balconey" value="key4" />
            </Picker>
          </Form>
      </View>
    );
  };

  export default RoomSelection;