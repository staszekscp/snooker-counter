import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const ConceideContainer = props => {
    
    return (
        <View style={styles.main}>
            <View style={styles.conceideButtonContainer}>
                <View style={props.p2Points-props.p1Points > props.remaining ? styles.conceideButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setFreeBallP1(false)
                            props.setFreeBallP2(false)
                            props.setFreeBallButtonP1(false)
                            props.setFreeBallButtonP2(false)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining === 7 && props.p1Points-props.p2Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            
                            props.setEndOfFrame(true)
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
                <View style={props.p1Points-props.p2Points > props.remaining ? styles.conceideButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setFreeBallP1(false)
                            props.setFreeBallP2(false)
                            props.setFreeBallButtonP1(false)
                            props.setFreeBallButtonP2(false)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining === 7 && props.p2Points-props.p1Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setEndOfFrame(true)
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