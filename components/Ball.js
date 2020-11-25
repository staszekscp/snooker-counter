import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const Ball = props => {
    let active = {...props.activeBalls}

    const p1ball = <Image style={styles.theBall} source={require('../assets/Ball/ball.png')} /> 
    const p1freeBall = <Image style={styles.theBall} source={require('../assets/Ball/freeball.png')} />

    const p2ball = <Image style={styles.theBall} source={require('../assets/Ball/ball.png')} /> 
    const p2freeBall = <Image style={styles.theBall} source={require('../assets/Ball/freeball.png')} />
    

     

    return (
        <View style={{...styles.ballContainer, ...props.style}}>
            <TouchableNativeFeedback
                disabled={active[props.val.toString()]}
                onPress={() => {
                    if (props.longPot) {
                        props.stats(prev => ({
                            ...prev,
                            pots: prev.pots+1,
                            long: prev.long+1
                        }))
                    } else {
                    props.stats(prev => ({
                        ...prev,
                        pots: prev.pots+1
                    }))}
                    props.setLongPot(false)
                    props.setFreeBP1(true)
                    props.setFreeBP2(true)
                    if (props.remaining > 27) {
                        props.pPoints(prev => prev+props.val)
                        props.setCurrentBreak(prev => prev+props.val)
                    } else if (props.remaining === 27) {
                        props.pPoints(prev => prev+2)
                        props.setCurrentBreak(prev => prev+2)
                    } else if (props.remaining === 25) {
                        props.pPoints(prev => prev+3)
                        props.setCurrentBreak(prev => prev+3)
                    } else if (props.remaining === 22) {
                        props.pPoints(prev => prev+4)
                        props.setCurrentBreak(prev => prev+4)
                    } else if (props.remaining === 18) {
                        props.pPoints(prev => prev+5)
                        props.setCurrentBreak(prev => prev+5)
                    } else if (props.remaining === 13) {
                        props.pPoints(prev => prev+6)
                        props.setCurrentBreak(prev => prev+6)
                    } else if (props.remaining === 7) {
                        props.pPoints(prev => prev+7)
                        props.setCurrentBreak(prev => prev+7)
                        props.setRemaining(0)
                    }
                    props.setFreeBall(false)
                    if (props.remaining === 34) {
                        props.activate({
                            '1': true,
                            '2': false,
                            '3': true,
                            '4': true,
                            '5': true,
                            '6': true,
                            '7': true})
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        props.setRemaining(props.remaining - 7)
                    } else if (props.remaining > 27 && (props.remaining - 27) % 8 !== 0 && props.val === 1) {
                        props.activate({
                            '1': true,
                            '2': false,
                            '3': false,
                            '4': false,
                            '5': false,
                            '6': false,
                            '7': false})
                        props.activateOpp({
                            '1': false,
                            '2': true,
                            '3': true,
                            '4': true,
                            '5': true,
                            '6': true,
                            '7': true})
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        if (!props.fb){
                            props.setRemaining(props.remaining - 8)
                        }
                    } else if (props.remaining > 27){
                        if (props.val === 1){
                            props.activate({
                                '1': true,
                                '2': false,
                                '3': false,
                                '4': false,
                                '5': false,
                                '6': false,
                                '7': false})
                            props.activateOpp({
                                '1': false,
                                '2': true,
                                '3': true,
                                '4': true,
                                '5': true,
                                '6': true,
                                '7': true})
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        if (!props.fb){
                            props.setRemaining(props.remaining - 1)
                        }
                        } else if ((props.remaining - 27) % 8 === 0){
                            props.activate({
                                '1': false,
                                '2': true,
                                '3': true,
                                '4': true,
                                '5': true,
                                '6': true,
                                '7': true})
                            props.activateOpp({
                                '1': false,
                                '2': true,
                                '3': true,
                                '4': true,
                                '5': true,
                                '6': true,
                                '7': true})
                                if (props.player === 'p1'){
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(true)
                                } else {
                                    props.setOverlayP1(true)
                                    props.setOverlayP2(false)
                                }
                        } else {
                            props.activate({
                                '1': false,
                                '2': true,
                                '3': true,
                                '4': true,
                                '5': true,
                                '6': true,
                                '7': true})
                            props.activateOpp({
                                '1': false,
                                '2': true,
                                '3': true,
                                '4': true,
                                '5': true,
                                '6': true,
                                '7': true})
                                if (props.player === 'p1'){
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(true)
                                } else {
                                    props.setOverlayP1(true)
                                    props.setOverlayP2(false)
                                }
                            props.setRemaining(props.remaining - 7)
                        }
                    } else if (props.remaining === 27) {
                        props.activate({
                            '1': true,
                            '2': false,
                            '3': true,
                            '4': true,
                            '5': true,
                            '6': true,
                            '7': true})
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.fb){
                        props.setRemaining(props.remaining - 2)
                    }
                    } else if (props.remaining === 25) {
                        props.activate({
                            '1': true,
                            '2': true,
                            '3': false,
                            '4': true,
                            '5': true,
                            '6': true,
                            '7': true})
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.fb){
                        props.setRemaining(props.remaining - 3)
                    }
                    } else if (props.remaining === 22) {
                        props.activate({
                            '1': true,
                            '2': true,
                            '3': true,
                            '4': false,
                            '5': true,
                            '6': true,
                            '7': true})
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.fb){
                        props.setRemaining(props.remaining - 4)
                    }
                    } else if (props.remaining === 18) {
                        props.activate({
                            '1': true,
                            '2': true,
                            '3': true,
                            '4': true,
                            '5': false,
                            '6': true,
                            '7': true})
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.fb){
                        props.setRemaining(props.remaining - 5)
                    }
                    } else if (props.remaining === 13) {
                        props.activate({
                            '1': true,
                            '2': true,
                            '3': true,
                            '4': true,
                            '5': true,
                            '6': false,
                            '7': true})
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.fb){
                        props.setRemaining(props.remaining - 6)
                    }
                    } 
                }}
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                >
                <View style={styles.ball}>
                    {props.val===1 && props.fb === true && props.player === 'p1' ? p1freeBall :
                    props.val===1 && props.player === 'p1' ? p1ball :
                    props.val===1 && props.fb === true && props.player === 'p2' ? p2freeBall :
                    props.val===1 && props.player === 'p2' ? p2ball :
                    <Image style={styles.theBall} source={require('../assets/Ball/ball.png')} /> }
                </View>
            </TouchableNativeFeedback>
        </View>
    )}
 
const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans'
    },
    ball: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    ballContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    theBall: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'black'
    }
})
 
export default Ball