import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const ConceideContainer = ({p1Points, p2Points, remaining, setEndOfFrame, setFreeBallP1, setFreeBallP2,
    setFreeBallButtonP1, setFreeBallButtonP2, backwardMode, setBackwardMode, modifyArray}) => {
    
    const conceide = () => {
        if (backwardMode) {
            modifyArray()
            setBackwardMode(false)
        }
        setFreeBallP1(false)
        setFreeBallP2(false)
        setFreeBallButtonP1(false)
        setFreeBallButtonP2(false)
        setEndOfFrame(true)
    }

    return (
        <View style={styles.main}>
            <View style={styles.conceideButtonContainer}>
                <View style={p2Points-p1Points > remaining ? styles.conceideButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            conceide()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={remaining === 7 && p1Points-p2Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            conceide()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>END OF FRAME</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.conceideButtonContainer}>
                <View style={p1Points-p2Points > remaining ? styles.conceideButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            conceide()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={remaining === 7 && p2Points-p1Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            conceide()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>END OF FRAME</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
    },
    conceideButtonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conceideButton: {
        height: 50,
        width: 120,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderWidth: 3,
    },
    endFrameButton: {
        height: 50,
        width: 120,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(24,210,0,0.5)',
        borderWidth: 3,
    },
    button: {
        height: 50,
        width: 120,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'scoreBold',
        fontSize: 16,
        paddingHorizontal: 5,
        textAlign: 'center'
    }
})
 
export default ConceideContainer