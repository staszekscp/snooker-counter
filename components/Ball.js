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
                    if (props.backwardMode) {
                        props.modifyArray()
                        props.setBackwardMode(false)
                    }
                    props.setCurrentShotIndex(4)
                    if (props.longPot) {
                        props.setStats(prev => ({
                            ...prev,
                            pots: prev.pots+1,
                            long: prev.long+1
                        }))
                    } else {
                    props.setStats(prev => ({
                        ...prev,
                        pots: prev.pots+1
                    }))}
                    props.setLongPot(false)
                    props.setFreeBallButtonP1(false)
                    props.setFreeBallButtonP2(false)
                    if (props.remaining > 27) {
                        props.setPoints(prev => prev+props.val)
                        props.setCurrentBreak(prev => prev+props.val)
                    } else if (props.remaining === 27) {
                        props.setPoints(prev => prev+2)
                        props.setCurrentBreak(prev => prev+2)
                    } else if (props.remaining === 25) {
                        props.setPoints(prev => prev+3)
                        props.setCurrentBreak(prev => prev+3)
                    } else if (props.remaining === 22) {
                        props.setPoints(prev => prev+4)
                        props.setCurrentBreak(prev => prev+4)
                    } else if (props.remaining === 18) {
                        props.setPoints(prev => prev+5)
                        props.setCurrentBreak(prev => prev+5)
                    } else if (props.remaining === 13) {
                        props.setPoints(prev => prev+6)
                        props.setCurrentBreak(prev => prev+6)
                    } else if (props.remaining === 7) {
                        props.setPoints(prev => prev+7)
                        props.setCurrentBreak(prev => prev+7)
                        props.setRemaining(0)
                        
                    }
                    props.setFreeBall(false)
                    if (props.remaining === 34) {
                        props.activateBalls(2)
                        props.activateOpponentsBalls(2)
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        props.setRemaining(props.remaining - 7)
                    } else if (props.remaining > 27 && (props.remaining - 27) % 8 !== 0 && props.val === 1) {
                        props.activateBalls(8)
                        props.activateOpponentsBalls(1)
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        if (!props.freeBall){
                            props.setRemaining(props.remaining - 8)
                        }
                    } else if (props.remaining > 27){
                        if (props.val === 1){
                            props.activateBalls(8)
                            props.activateOpponentsBalls(1)
                            if (props.player === 'p1'){
                                props.setOverlayP1(false)
                                props.setOverlayP2(true)
                            } else {
                                props.setOverlayP1(true)
                                props.setOverlayP2(false)
                            }
                        if (!props.freeBall){
                            props.setRemaining(props.remaining - 1)
                        }
                        } else if ((props.remaining - 27) % 8 === 0){
                            props.activateBalls(1)
                            props.activateOpponentsBalls(1)
                                if (props.player === 'p1'){
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(true)
                                } else {
                                    props.setOverlayP1(true)
                                    props.setOverlayP2(false)
                                }
                        } else {
                            props.activateBalls(1)
                            props.activateOpponentsBalls(1)
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
                        props.activateBalls(2)
                        props.activateOpponentsBalls(2)
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.freeBall){
                        props.setRemaining(props.remaining - 2)
                    }
                    } else if (props.remaining === 25) {
                        props.activateBalls(3)
                        props.activateOpponentsBalls(3)
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.freeBall){
                        props.setRemaining(props.remaining - 3)
                    }
                    } else if (props.remaining === 22) {
                        props.activateBalls(4)
                        props.activateOpponentsBalls(4)
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.freeBall){
                        props.setRemaining(props.remaining - 4)
                    }
                    } else if (props.remaining === 18) {
                        props.activateBalls(5)
                        props.activateOpponentsBalls(5)
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.freeBall){
                        props.setRemaining(props.remaining - 5)
                    }
                    } else if (props.remaining === 13) {
                        props.activateBalls(6)
                        props.activateOpponentsBalls(6)
                        if (props.player === 'p1'){
                            props.setOverlayP1(false)
                            props.setOverlayP2(true)
                        } else {
                            props.setOverlayP1(true)
                            props.setOverlayP2(false)
                        }
                    if (!props.freeBall){
                        props.setRemaining(props.remaining - 6)
                    }
                    } 
                }}
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                >
                <View style={styles.ball}>
                    {props.val===1 && props.freeBall === true && props.player === 'p1' ? p1freeBall :
                    props.val===1 && props.player === 'p1' ? p1ball :
                    props.val===1 && props.freeBall === true && props.player === 'p2' ? p2freeBall :
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