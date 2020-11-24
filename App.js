
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import DevicesScreen from './DevicesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Devices" component={DevicesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
