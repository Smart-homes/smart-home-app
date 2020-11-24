
import React from 'react';
import { Button, StyleSheet,View } from 'react-native';
import DeviceButton from './DeviceButton';

const DevicesScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <DeviceButton title="Fan"
          onPress={()=>console.log("make function call to function that does API call")}>
        </DeviceButton>
        <DeviceButton title="Fan"
          onPress={()=>console.log("make function call to function that does API call")}>
        </DeviceButton>
        <DeviceButton title="Fan"
          onPress={()=>console.log("make function call to function that does API call")}>
        </DeviceButton>
        <DeviceButton title="Fan"
          onPress={()=>console.log("make function call to function that does API call")}>
        </DeviceButton>
        <DeviceButton title="Fan"
          onPress={()=>console.log("make function call to function that does API call")}>
        </DeviceButton>
        {/* <Text>This is { route.params.name }'s profile</Text> */}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container:{
      backgroundColor: "#000",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    },
  });

  export default DevicesScreen;