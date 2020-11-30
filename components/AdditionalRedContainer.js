import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const AdditionalRedContainer = props => {
    return (
        <View style={styles.main}>
            <View style={styles.additionalRedsContainer}>
                <View style={props.remaining < 35 || (props.activeBallsP1['1']) || (props.remaining !== 147 && !props.overlayP1 && !props.overlayP2) || props.overlayP1 ? {display: 'none'} : styles.additionalRedButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setStatsP1(prev => ({
                                ...prev,
                                pots: prev.pots+1
                            }))
                            props.setCurrentBreakP1(prev => prev+1)
                            props.setP1Points(prev => prev+1)
                            props.setRemaining(prev => prev-8)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.additionalRedText}>+1 RED</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining < 35 || !props.freeBallButtonP2 ? {display: 'none'} : styles.redWentInButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setRemaining(prev => prev-8)
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
                <View style={props.remaining < 35 || (props.activeBallsP2['1'])  || (props.remaining !== 147 && !props.overlayP1 && !props.overlayP2) || props.overlayP2? {display: 'none'} : styles.additionalRedButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setStatsP2(prev => ({
                                ...prev,
                                pots: prev.pots+1
                            }))
                            props.setCurrentBreakP2(prev => prev+1)
                            props.setP2Points(prev => prev+1)
                            props.setRemaining(prev => prev-8)
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.additionalRedText}>+1 RED</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={props.remaining < 35 || !props.freeBallButtonP1 ? {display: 'none'} : styles.redWentInButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backwardMode) {
                                props.modifyArray()
                                props.setBackwardMode(false)
                            }
                            props.setCurrentShotIndex(4)
                            props.setRemaining(prev => prev-8)
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
        height: 60,
        width: '100%',
        flexDirection: 'row',
    },
    additionalRedsContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    redWentInButton: {
        height: 50,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,0,0,0.7)',
        borderWidth: 3,
    },
    additionalRedButton: {
        height: 50,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: 'rgba(24,210,0,0.5)',
        marginRight: 5
    },
    button: {
        height: 50,
        width: 80,
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