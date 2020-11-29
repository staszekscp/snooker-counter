import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const MissContainer = props => {
    return (
        <View style={styles.main}>
            <View style={styles.missButtonContainer}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setCurrentBreakP1(0)
                            if (props.longPotP1) {
                                props.setStatsP1(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            props.setStatsP1(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            props.setLongPotP1(false)
                            props.setFreeBallButtonP1(false)
                            props.setFreeBallButtonP2(false)
                            props.setFreeBallP1(false)
                            if (props.remaining === 34) {
                                props.activateBallsP1(1)
                                props.activateBallsP2(1)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                                props.setRemaining(props.remaining - 7)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0){
                                props.activateBallsP1(1)
                                props.activateBallsP2(1)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                props.activateBallsP1(1)
                                props.activateBallsP2(1)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            if (!props.freeBallP1){
                                props.setRemaining(props.remaining - 7)
                            }
                            } else if (props.remaining === 27) {
                                props.activateBallsP1(2)
                                props.activateBallsP2(2)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 25) {
                                props.activateBallsP1(3)
                                props.activateBallsP2(3)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 22) {
                                props.activateBallsP1(4)
                                props.activateBallsP2(4)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 18) {
                                props.activateBallsP1(5)
                                props.activateBallsP2(5)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 13) {
                                props.activateBallsP1(6)
                                props.activateBallsP2(6)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 7) {
                                props.activateBallsP1(7)
                                props.activateBallsP2(7)
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } 
                        }}
                            
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText}>MISS</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.missButtonContainer}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                         onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setCurrentBreakP2(0)
                            if (props.longPotP2) {
                                props.setStatsP2(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            props.setStatsP2(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            props.setLongPotP2(false)
                            props.setFreeBallButtonP1(false)
                            props.setFreeBallButtonP2(false)
                            props.setFreeBallP2(false)
                            if (props.remaining === 34) {
                                props.activateBallsP1(2)
                                props.activateBallsP2(2)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                                props.setRemaining(props.remaining - 7)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0){
                                props.activateBallsP1(1)
                                props.activateBallsP2(1)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                props.activateBallsP1(1)
                                props.activateBallsP2(1)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            if (!props.freeBallP2){
                                props.setRemaining(props.remaining - 7)
                            }
                            } else if (props.remaining === 27) {
                                props.activateBallsP1(2)
                                props.activateBallsP2(2)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 25) {
                                props.activateBallsP1(3)
                                props.activateBallsP2(3)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 22) {
                                props.activateBallsP1(4)
                                props.activateBallsP2(4)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 18) {
                                props.activateBallsP1(5)
                                props.activateBallsP2(5)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 13) {
                                props.activateBallsP1(6)
                                props.activateBallsP2(6)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 7) {
                                props.activateBallsP1(7)
                                props.activateBallsP2(7)
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } 
                         }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText} >MISS</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: 75,
        width: '100%',
        flexDirection: 'row'
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
        backgroundColor: 'rgba(255, 17, 0,0.7)'
    },
    miss: {
        height: 50,
        width: 120,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'scoreBold',
        fontSize: 20
    }
})
 
export default MissContainer