import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback } from 'react-native';
 
const AdditionalRedContainer = ({remaining, setRemaining, overlayP1, overlayP2, activeBallsP1, activeBallsP2,
    setP1Points, setP2Points, setStatsP1, setStatsP2, freeBallButtonP1, freeBallButtonP2, setCurrentBreakP1,
    setCurrentBreakP2, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray, disabled, setDisabled}) => {

    const redWentIn = () => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 2000)
        if (backwardMode) {
            modifyArray()
            setBackwardMode(false)
        }
        setCurrentShotIndex(4)
        setRemaining(prev => prev-8)
    }

    return (
        <View style={styles.main}>
            <View style={styles.additionalRedsContainer}>
                <View style={remaining < 35 || (activeBallsP1['1']) || (remaining !== 147 && !overlayP1 && !overlayP2) || overlayP1 ? {display: 'none'} : styles.additionalRedButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            redWentIn()
                            setStatsP1(prev => ({
                                ...prev,
                                pots: prev.pots+1
                            }))
                            setCurrentBreakP1(prev => prev+1)
                            setP1Points(prev => prev+1)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.additionalRedText}>+1 RED</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={remaining < 35 || !freeBallButtonP2 ? {display: 'none'} : styles.redWentInButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            redWentIn()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.redWentInText}>RED WENT IN!</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.additionalRedsContainer}>
                <View style={remaining < 35 || (activeBallsP2['1'])  || (remaining !== 147 && !overlayP1 && !overlayP2) || overlayP2? {display: 'none'} : styles.additionalRedButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            redWentIn()
                            setStatsP2(prev => ({
                                ...prev,
                                pots: prev.pots+1
                            }))
                            setCurrentBreakP2(prev => prev+1)
                            setP2Points(prev => prev+1)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.additionalRedText}>+1 RED</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={remaining < 35 || !freeBallButtonP1 ? {display: 'none'} : styles.redWentInButton}>
                    <TouchableNativeFeedback
                        disabled={disabled}
                        onPress={() => {
                            redWentIn()
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.redWentInText}>RED WENT IN!</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: Dimensions.get('window').height <= 740 ? '6%' : '7%',
        width: '100%',
        flexDirection: 'row',
    },
    additionalRedsContainer: {
        width: '50%',
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redWentInButton: {
        height: '100%',
        width: '60%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,0,0,0.7)',
        borderWidth: 3,
    },
    additionalRedButton: {
        height: '100%',
        width: '60%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: 'rgba(24,210,0,0.5)',
        marginRight: 5
    },
    button: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    additionalRedText: {
        fontFamily: 'score',
        fontSize: 16,
        textAlign: 'center'
    },
    redWentInText: {
        fontFamily: 'score',
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 3
    }
})
 
export default AdditionalRedContainer