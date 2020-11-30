import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const MissContainer = ({activateBallsP1, activateBallsP2, setOverlayP1, setOverlayP2, remaining, setRemaining,
    freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2, setStatsP1, setStatsP2,
    setLongPotP1, longPotP1, setLongPotP2, longPotP2, setCurrentBreakP1, setCurrentBreakP2, backwardMode, setBackwardMode,
    setCurrentShotIndex, modifyArray}) => {
    return (
        <View style={styles.main}>
            <View style={styles.missButtonContainer}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (backwardMode) {
                                modifyArray()
                                setBackwardMode(false)
                            }
                            setCurrentShotIndex(4)
                            setCurrentBreakP1(0)
                            if (longPotP1) {
                                setStatsP1(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            setStatsP1(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            setLongPotP1(false)
                            setFreeBallButtonP1(false)
                            setFreeBallButtonP2(false)
                            setFreeBallP1(false)
                            if (remaining === 34) {
                                activateBallsP1(1)
                                activateBallsP2(1)
                                setOverlayP1(true)
                                setOverlayP2(false)
                                setRemaining(remaining - 7)
                            } else if (remaining > 27 && (remaining - 27)%8 === 0){
                                activateBallsP1(1)
                                activateBallsP2(1)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                activateBallsP1(1)
                                activateBallsP2(1)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            if (!freeBallP1){
                                setRemaining(remaining - 7)
                            }
                            } else if (remaining === 27) {
                                activateBallsP1(2)
                                activateBallsP2(2)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining === 25) {
                                activateBallsP1(3)
                                activateBallsP2(3)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining === 22) {
                                activateBallsP1(4)
                                activateBallsP2(4)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining === 18) {
                                activateBallsP1(5)
                                activateBallsP2(5)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining === 13) {
                                activateBallsP1(6)
                                activateBallsP2(6)
                                setOverlayP1(true)
                                setOverlayP2(false)
                            } else if (remaining === 7) {
                                activateBallsP1(7)
                                activateBallsP2(7)
                                setOverlayP1(true)
                                setOverlayP2(false)
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
                            if (backwardMode) {
                                modifyArray()
                                setBackwardMode(false)
                            }
                            setCurrentShotIndex(4)
                            setCurrentBreakP2(0)
                            if (longPotP2) {
                                setStatsP2(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            setStatsP2(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            setLongPotP2(false)
                            setFreeBallButtonP1(false)
                            setFreeBallButtonP2(false)
                            setFreeBallP2(false)
                            if (remaining === 34) {
                                activateBallsP1(2)
                                activateBallsP2(2)
                                setOverlayP1(false)
                                setOverlayP2(true)
                                setRemaining(remaining - 7)
                            } else if (remaining > 27 && (remaining - 27)%8 === 0){
                                activateBallsP1(1)
                                activateBallsP2(1)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                activateBallsP1(1)
                                activateBallsP2(1)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            if (!freeBallP2){
                                setRemaining(remaining - 7)
                            }
                            } else if (remaining === 27) {
                                activateBallsP1(2)
                                activateBallsP2(2)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining === 25) {
                                activateBallsP1(3)
                                activateBallsP2(3)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining === 22) {
                                activateBallsP1(4)
                                activateBallsP2(4)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining === 18) {
                                activateBallsP1(5)
                                activateBallsP2(5)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining === 13) {
                                activateBallsP1(6)
                                activateBallsP2(6)
                                setOverlayP1(false)
                                setOverlayP2(true)
                            } else if (remaining === 7) {
                                activateBallsP1(7)
                                activateBallsP2(7)
                                setOverlayP1(false)
                                setOverlayP2(true)
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'scoreBold',
        fontSize: 20
    }
})
 
export default MissContainer