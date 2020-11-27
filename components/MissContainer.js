import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const MissContainer = props => {
    return (
        <View style={styles.main}>
            <View style={styles.missButtonContainer}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP1(0)
                            if (props.longPotP1) {
                                props.statsP1(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            props.statsP1(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            props.setLongPotP1(false)
                            props.setFreeBP1(true)
                            props.setFreeBP2(true)
                            props.setFreeBallP1(false)
                            if (props.remaining === 34) {
                                props.activateP1({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                                props.setRemaining(props.remaining - 7)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0){
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            if (!props.fbP1){
                                props.setRemaining(props.remaining - 7)
                            }
                            } else if (props.remaining === 27) {
                                props.activateP1({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 25) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': false,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 22) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': false,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 18) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': false,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 13) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': false,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            } else if (props.remaining === 7) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': false})
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
                            if (props.backMode) {
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP2(0)
                            if (props.longPotP2) {
                                props.statsP2(prev => ({
                                    ...prev,
                                    miss: prev.miss+1,
                                    longMiss: prev.longMiss+1
                                }))
                            } else {
                            props.statsP2(prev => ({
                                ...prev,
                                miss: prev.miss+1
                            }))}
                            props.setLongPotP2(false)
                            props.setFreeBP1(true)
                            props.setFreeBP2(true)
                            props.setFreeBallP2(false)
                            if (props.remaining === 34) {
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                                props.setRemaining(props.remaining - 7)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0){
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            if (!props.fbP2){
                                props.setRemaining(props.remaining - 7)
                            }
                            } else if (props.remaining === 27) {
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 25) {
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': false,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 22) {
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': false,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 18) {
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': false,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 13) {
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': false,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else if (props.remaining === 7) {
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': false})
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