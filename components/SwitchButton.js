import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const SwitchButton = ({setCurrentBreak, setFreeBallButtonP1, setFreeBallButtonP2, setFreeBall, setOverlayP1, setOverlayP2,
setRemaining, remaining, activateBallsP1, activateBallsP2, setStats, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray}) => {
    return (<View style={styles.buttonContainer}>
                <TouchableNativeFeedback
                    onPress={() => {
                        if (backwardMode) {
                            modifyArray()
                            setBackwardMode(false)
                        }
                        setCurrentShotIndex(4)
                        setStats(prev => ({
                            ...prev,
                            long: prev.long + 0
                        }))
                        setCurrentBreak(0)
                        setFreeBallButtonP1(false)
                        setFreeBallButtonP2(false)
                        setFreeBall(false)
                        if (remaining === 34) {
                            activateBallsP1(2)
                            activateBallsP2(2)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                            setRemaining(remaining - 7)
                        } else if (remaining > 27){
                            activateBallsP1(1)
                            activateBallsP2(1)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                            if ((remaining - 27) % 8 !== 0){
                                setRemaining(remaining - 7)
                            }
                        } else if (remaining === 27) {
                            activateBallsP1(2)
                            activateBallsP2(2)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                        } else if (remaining === 25) {
                            activateBallsP1(3)
                            activateBallsP2(3)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                        } else if (remaining === 22) {
                            activateBallsP1(4)
                            activateBallsP2(4)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                        } else if (remaining === 18) {
                            activateBallsP1(5)
                            activateBallsP2(5)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                        } else if (remaining === 13) {
                            activateBallsP1(6)
                            activateBallsP2(6)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
                        } else if (remaining === 7) {
                            activateBallsP1(7)
                            activateBallsP2(7)
                            setOverlayP1(prev => !prev)
                            setOverlayP2(prev => !prev)
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