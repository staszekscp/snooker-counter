import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback } from 'react-native';
 
const SafetyContainer = ({activateBallsP1, activateBallsP2, setOverlayP1, setOverlayP2, remaining, setRemaining, setFreeBallP1,
    setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2, setStatsP1, setStatsP2, setLongPotP1, setLongPotP2,
    setCurrentBreakP1, setCurrentBreakP2, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray, disabled, setDisabled, style}) => {
    
    const setShot = (p) => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 2000)
        if (backwardMode) {
            modifyArray()
            setBackwardMode(false)
        }
        setCurrentShotIndex(4)
        setFreeBallButtonP1(false)
        setFreeBallButtonP2(false)
        setCurrentBreakP1(0)
        setCurrentBreakP2(0)
        setLongPotP1(false)
        setLongPotP2(false)
        setFreeBallP1(false)
        setFreeBallP2(false)
        if (remaining === 34) {
            activateBallsP1(2)
            activateBallsP2(2)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
            setRemaining(remaining - 7)
        } else if (remaining > 27){
            activateBallsP1(1)
            activateBallsP2(1)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
            if ((remaining - 27) % 8 !== 0){
                setRemaining(remaining - 7)
            }
        } else if (remaining === 27) {
            activateBallsP1(2)
            activateBallsP2(2)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 25) {
            activateBallsP1(3)
            activateBallsP2(3)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 22) {
            activateBallsP1(4)
            activateBallsP2(4)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 18) {
            activateBallsP1(5)
            activateBallsP2(5)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 13) {
            activateBallsP1(6)
            activateBallsP2(6)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 7) {
            activateBallsP1(7)
            activateBallsP2(7)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } 
    }

    
    return (
        <View style={{...styles.main, ...style}}>
            <View style={styles.safetyButtonContainer}>
                <View style={styles.safeButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            setShot(1)
                            setStatsP1(prev => ({
                                ...prev,
                                safe: prev.safe+1
                            }))
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>SAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.unsafeButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            setShot(1)
                            setStatsP1(prev => ({
                                ...prev,
                                unsafe: prev.unsafe+1
                            }))
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>UNSAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.safetyButtonContainer}>
                <View style={styles.safeButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            setShot(2)
                            setStatsP2(prev => ({
                                ...prev,
                                safe: prev.safe+1
                            }))
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>SAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.unsafeButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            setShot(2)
                            setStatsP2(prev => ({
                                ...prev,
                                unsafe: prev.unsafe+1
                            }))
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>UNSAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: Dimensions.get('window').height <= 740 ? '5%' : '6.5%',
        paddingBottom: 5,
        flexDirection: 'row'
    },
    safetyButtonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    safeButton: {
        marginRight: 5,
        height: '100%',
        width: '45%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    unsafeButton: {
        height: '100%',
        width: '45%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.35)'
    },
    safety: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeText: {
        color: '#000',
        fontFamily: 'scoreBold',
        fontSize: Dimensions.get('window').height <=740 ? 14 : 16
    }
})
 
export default SafetyContainer