import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Drawer } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../Components/SignInForm';
import DevicesScreen from '../Components/DevicesScreen';
import RegisterForm from '../Components/RegisterForm';
import RoomRegistretion from '../Components/RoomRegistrtion';
import RoomSelection from '../Components/RoomSelection';
import { Component } from "react";
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
import DeviceRegistration from '../Components/DeviceRegistration';
import SideBar from '../Components/Sidebar';


const Stack = createStackNavigator();
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   isReady: false,
    // };
  }
  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("native-base/Fonts/Ionicons.ttf")
  //   });
  //   this.setState({ isReady: true });
  // }

  closeDrawer() {
    this._drawer._root.close();
  };
  openDrawer() { this._drawer._root.open() };
  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <AppLoading />
    //   );
    // }
    // else 
    {
      return (
        <View style={styles.container} >
          <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<SideBar style={{ marginTop: 20 }} navigator={this.navigator} />
            }
            onClose={() => { this.closeDrawer() }} >
            <NavigationContainer >
              {/* screenOptions={{ headerShown: false }} */}
              <Stack.Navigator>
                <Stack.Screen name="RoomSelection" component={RoomSelection}
                  options={({ navigation }) => ({

                    headerRight: () => (
                      <Button iconLeft onPress={() => {
                        SecureStore.deleteItemAsync("user_token")
                        navigation.navigate('Signin')

                      }}>
                        <Icon name='log-out' />
                        <Text>Log Out</Text>
                      </Button>
                    ),
                    headerLeft: null,
                  })}
                />
                <Stack.Screen
                  name="Signin"
                  component={SignInScreen}
                />
                <Stack.Screen name="form" component={RegisterForm} />
                <Stack.Screen name="Devices" component={DevicesScreen} />
                <Stack.Screen name="Room" component={RoomRegistretion} />
                <Stack.Screen name="Device" component={DeviceRegistration} />
              </Stack.Navigator>
            </NavigationContainer>
          </Drawer>
        </View >
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },

});



export default App;



  //  options={({ navigation }) => ({
  //   headerRight: () => (
  //     <Button onPress={() => navigation.navigate('Home')}>
  //       <Text>LogOut</Text>
  //     </Button>
  //   ),
  // })} 


                    // headerLeft: () => (
                  //   <Button transparent onPress={() => this.openDrawer()}>
                  //     <Image source={require('../Components/menu.webp')}
                  //       style={{ height: 50, width: 40 }}
                  //     />
                  //   </Button>
                  // ),



  // useEffect(() => {
  //   (async () => await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //   }))();
  // }, []);