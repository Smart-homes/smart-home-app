import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Icon, Picker, Form } from "native-base"
import { LinearGradient } from 'expo-linear-gradient';

const RoomSelection = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
          
        </LinearGradient>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    }
  });
  export default RoomSelection;