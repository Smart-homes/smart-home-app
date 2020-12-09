import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const DeviceButton = ({onPress, title})=> {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.intext}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 16,
        borderRadius: 10,
        padding:10,
        backgroundColor: "#eee",
        width: 100,
        height: 100,
        alignContent: "space-around"
    },
    intext: {
        flex:1,
        flexDirection: "row",
        alignSelf: "center",
        alignContent: "space-around",
    }
});

export default DeviceButton;