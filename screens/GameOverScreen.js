import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, Text} from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
                <View style={styles.summaryContainer}>
                    <ImageBackground style={styles.img} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <Text>SUMMARY</Text>
                            <Text></Text>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        
    },
    img: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    summaryContainer: {
        height: '50%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        bottom: 100,
        
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.8)',
        height: '100%',
        width: '100%'
       }
})

export default GameOverScreen