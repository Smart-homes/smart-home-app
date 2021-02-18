import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Drawer, Icon, Text, Picker } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';

// import LOGO from "./2565902.html";
export default class RoomSelection extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient style={styles.gradient} colors={['#43D4FF', '#38ABFD', '#2974FA']}>
                    <Text>"YO BITCHH"</Text>
                    <Image style={styles.logo} source={require('./LP.jpeg')} />
                    <Button iconLeft onPress={() => { this.props.navigation.navigate('Signin') }
                    }>
                        <Icon name='log-out' />
                        <Text>Log Out</Text>
                    </Button>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        // flexWrap: 'wrap',
        alignItems: 'center',
        // justifyContent: "center",
    },
    logo: {
        // flex: 1,
        margin: "auto",
    },
});