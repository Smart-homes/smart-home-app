import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import RoomRegistretion from './RoomRegistrtion';

// const RoomRegistretion = ({ navigation }) => {
export default class RoomRegistretion extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          <Form style={styles.form}>
            <Item rounded style={styles.field}>
              <Input placeholder='Room'/>
            </Item>
            <Item rounded style={styles.field}>
              <Input placeholder='Room-ID'/>
            </Item>
              {/* onPress={() => this.props.navigation.navigate('RoomSelection')}> */}
            <Button
            rounded
            onPress={() =>navigation.navigate('RoomSelection')}>
            <Text>Add Rooms</Text>
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
    }
  });
  // export default RoomRegistretion;