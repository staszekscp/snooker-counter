import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const SafetyContainer = props => {
    return (
        <View style={{...styles.main, ...props.style}}>
            <View style={styles.safetyButtonContainer}>
                <View style={styles.safeButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP1(0)
                            props.statsP1(prev => ({
                                ...prev,
                                safe: prev.safe+1
                            }))
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
                            } else if (props.remaining > 27){
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                                if ((props.remaining - 27) % 8 !== 0){
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
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>SAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.unsafeButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP1(0)
                            props.statsP1(prev => ({
                                ...prev,
                                unsafe: prev.unsafe+1
                            }))
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
                            } else if (props.remaining > 27){
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                                if ((props.remaining - 27) % 8 !== 0){
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
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>UNSAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={styles.safetyButtonContainer}>
                <View style={styles.safeButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP2(0)
                            props.statsP2(prev => ({
                                ...prev,
                                safe: prev.safe+1
                            }))
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
                            } else if (props.remaining > 27){
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                                if ((props.remaining - 27) % 8 !== 0){
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
                        <View style={styles.safety}>
                            <Text style={styles.safeText}>SAFE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.unsafeButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            if (props.backMode) {
                                props.modifyArray()
                                props.setBackMode(false)
                            }
                            props.setBack(4)
                            props.setCurrentBreakP2(0)
                            props.statsP2(prev => ({
                                ...prev,
                                unsafe: prev.unsafe+1
                            }))
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
                            } else if (props.remaining > 27){
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                                if ((props.remaining - 27) % 8 !== 0){
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
        height: 65,
        flexDirection: 'row',
        
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
        height: 50,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    unsafeButton: {
        height: 50,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.35)'
    },
    safety: {
        height: 50,
        width: 80,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeText: {
        color: 'black',
        fontFamily: 'scoreBold',
        fontSize: 16
    }
})
 
export default SafetyContainer