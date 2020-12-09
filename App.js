import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInForm';
import DevicesScreen from './DevicesScreen';
import RegisterForm from './RegisterForm';
import RoomRegistretion from './RoomRegistrtion';
import RoomSelection from './RoomSelection';

const Stack = createStackNavigator();

export default function App() {
  return (
  <View style={styles.container}>
  <NavigationContainer >
    <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>        
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Devices" component={DevicesScreen} />
      <Stack.Screen name="form" component={RegisterForm}/>
      <Stack.Screen name="Room" component={RoomRegistretion}/>
      <Stack.Screen name="RoomSelection" component={RoomSelection}/>
     </Stack.Navigator>
    </LinearGradient>
  </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  }
});
