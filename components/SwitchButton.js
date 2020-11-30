import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const SwitchButton = props => {
    return (<View style={styles.buttonContainer}>
                <TouchableNativeFeedback
                    onPress={() => {
                        if (props.backwardMode) {
                            props.modifyArray()
                            props.setBackwardMode(false)
                        }
                        props.setCurrentShotIndex(4)
                        props.setStats(prev => ({
                            ...prev,
                            long: prev.long + 0
                        }))
                        props.setCurrentBreak(0)
                        props.setFreeBallButtonP1(false)
                        props.setFreeBallButtonP2(false)
                        props.setFreeBall(false)
                        if (props.remaining === 34) {
                            props.activateBallsP1(2)
                            props.activateBallsP2(2)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                            props.setRemaining(props.remaining - 7)
                        } else if (props.remaining > 27){
                            props.activateBallsP1(1)
                            props.activateBallsP2(1)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                            if ((props.remaining - 27) % 8 !== 0){
                                props.setRemaining(props.remaining - 7)
                            }
                        } else if (props.remaining === 27) {
                            props.activateBallsP1(2)
                            props.activateBallsP2(2)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } else if (props.remaining === 25) {
                            props.activateBallsP1(3)
                            props.activateBallsP2(3)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } else if (props.remaining === 22) {
                            props.activateBallsP1(4)
                            props.activateBallsP2(4)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } else if (props.remaining === 18) {
                            props.activateBallsP1(5)
                            props.activateBallsP2(5)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } else if (props.remaining === 13) {
                            props.activateBallsP1(6)
                            props.activateBallsP2(6)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } else if (props.remaining === 7) {
                            props.activateBallsP1(7)
                            props.activateBallsP2(7)
                            props.setOverlayP1(prev => !prev)
                            props.setOverlayP2(prev => !prev)
                        } 
                    }}
                    background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                    >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>SWITCH PLAYERS</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>)
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 90,
        width: 120,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderWidth: 3,
        bottom: 100
    },
    button: {
        height: 90,
        width: 120,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'scoreBold',
        fontSize: 20,
        paddingHorizontal: 5,
        textAlign: 'center'
    }
})

export default SwitchButton