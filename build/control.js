import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

//button

function Control ({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
    return (
        <>
            <TouchableHighlight
                style={[
                    styles.controlButtonBorder,
                    {backgroundColor : isRunning ? '#333333' : '1c1c1e'},
                ]}
                onPress= {handleLeftButtonPress}
            >
                <View style={styles.controlButton}>
                    <Text style={{color : isRunning ? '#fff' : '9d9ca2'}}>
                        {isRunning ? "Lap" : "Reset"}
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={[
                    styles.controlButtonBorder,
                    {backgroundColor : isRunning ? '#340e0d' : '#0a2a12'},
                ]}
                onPress={handleRightButtonPress}
            >
                <View style={styles.controlButton}>
                    <Text style={{color : isRunning ? '#ff0000' : '#37d05c'}}>
                        {isRunning ? "Stop" : "Start"}
                    </Text>
                </View>
            </TouchableHighlight>
        </>
    );
};

const CENTER = {
    justifyContent : "center",
    alignItems : "center",
};

const styles = StyleSheet.create({
    controlButtonBorder: {
        ...CENTER,
        width : 70,
        height : 70,
        borderRadius : 70,
    },
    controlButton: {
        ...CENTER,
        width : 65,
        height : 65,
        borderRadius : 65,
        borderColor : '#000',
        borderWidth : 1,
    },
});

export default React.memo(Control)