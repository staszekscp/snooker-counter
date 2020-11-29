import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const ConceideContainer = props => {

    
    return (
        <View style={styles.main}>
            <View style={styles.missButtonContainer}>
                <View style={props.p2Points-props.p1Points > props.remaining ? styles.missButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setFreeBallP1(false)
                            props.setFreeBallP2(false)
                            props.setFreeBallButtonP1(true)
                            props.setFreeBallButtonP2(true)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining === 7 && props.p1Points-props.p2Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText}>END OF FRAME</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.missButtonContainer}>
                <View style={props.p1Points-props.p2Points > props.remaining ? styles.missButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setFreeBallP1(false)
                            props.setFreeBallP2(false)
                            props.setFreeBallButtonP1(true)
                            props.setFreeBallButtonP2(true)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText}>CONCEIDE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining === 7 && props.p2Points-props.p1Points > 7 ? styles.endFrameButton : {display: 'none'}}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setEndOfFrame(true)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
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
    missButtonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    missButton: {
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
    miss: {
        height: 50,
        width: 120,
        borderRadius: 15,
        borderColor: 'black',
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