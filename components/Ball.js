import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Image } from 'react-native';

import ballImage from '../assets/Ball/ball.png'
import freeBallImage from '../assets/Ball/freeball.png'

const Ball = ({style, activeBalls, val, setPoints, setOverlayP1, setOverlayP2, player, remaining, setRemaining,
    freeBall, setFreeBall, setFreeBallButtonP1, setFreeBallButtonP2, setStats, setLongPot, longPot, setCurrentBreak,
    backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray, activateBalls, activateOpponentsBalls, setShowBreak}) => {
    let active = {...activeBalls}

    const p1ball = <Image style={styles.ballImg} source={ballImage} /> 
    const p1freeBall = <Image style={styles.ballImg} source={freeBallImage} />

    const p2ball = <Image style={styles.ballImg} source={ballImage} /> 
    const p2freeBall = <Image style={styles.ballImg} source={freeBallImage} />

    const activateColor = (val, val2) => {
        activateBalls(val)
        activateOpponentsBalls(val2)
        setOverlayP1(player === 'p2')
        setOverlayP2(player === 'p1')
    }

    return (
        <View style={{...styles.ballContainer, ...style}}>
            <TouchableNativeFeedback
                disabled={!active[val.toString()]}
                onPress={() => {
                    setShowBreak(true)
                    if (backwardMode) {
                        modifyArray()
                        setBackwardMode(false)
                    }
                    setCurrentShotIndex(4)
                    if (longPot) {
                        setStats(prev => ({
                            ...prev,
                            pots: prev.pots+1,
                            long: prev.long+1
                        }))
                    } else {
                    setStats(prev => ({
                        ...prev,
                        pots: prev.pots+1
                    }))}
                    setLongPot(false)
                    setFreeBallButtonP1(false)
                    setFreeBallButtonP2(false)
                    if (remaining > 27) {
                        setPoints(prev => prev+val)
                        setCurrentBreak(prev => prev+val)
                    } else if (remaining === 27) {
                        setPoints(prev => prev+2)
                        setCurrentBreak(prev => prev+2)
                    } else if (remaining === 25) {
                        setPoints(prev => prev+3)
                        setCurrentBreak(prev => prev+3)
                    } else if (remaining === 22) {
                        setPoints(prev => prev+4)
                        setCurrentBreak(prev => prev+4)
                    } else if (remaining === 18) {
                        setPoints(prev => prev+5)
                        setCurrentBreak(prev => prev+5)
                    } else if (remaining === 13) {
                        setPoints(prev => prev+6)
                        setCurrentBreak(prev => prev+6)
                    } else if (remaining === 7) {
                        setPoints(prev => prev+7)
                        setCurrentBreak(prev => prev+7)
                        setRemaining(0)
                    }
                    setFreeBall(false)
                    if (remaining === 34) {
                        activateColor(2, 2)
                        setRemaining(remaining - 7)
                    } else if (remaining > 27 && (remaining - 27) % 8 !== 0 && val === 1) {
                        activateColor(8, 1)
                        if (!freeBall){
                            setRemaining(remaining - 8)
                        }
                    } else if (remaining > 27){
                        if (val === 1){
                            activateColor(8, 1)
                            if (!freeBall){
                                setRemaining(remaining - 1)
                            }
                        } else if ((remaining - 27) % 8 === 0){
                            activateColor(1, 1)
                        } else {
                            activateColor(1, 1)
                            setRemaining(remaining - 7)
                        }
                    } else if (remaining === 27) {
                        activateColor(2, 2)
                        if (!freeBall){
                            setRemaining(remaining - 2)
                        }
                    } else if (remaining === 25) {
                        activateColor(3, 3)
                        if (!freeBall){
                            setRemaining(remaining - 3)
                        }
                    } else if (remaining === 22) {
                        activateColor(4, 4)
                        if (!freeBall){
                            setRemaining(remaining - 4)
                        }
                    } else if (remaining === 18) {
                        activateColor(5, 5)
                        if (!freeBall){
                            setRemaining(remaining - 5)
                        }
                    } else if (remaining === 13) {
                        activateColor(6, 6)
                        if (!freeBall){
                            setRemaining(remaining - 6)
                        }
                    } 
                }}
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                >
                <View style={styles.ball}>
                    {val===1 && freeBall === true && player === 'p1' ? p1freeBall :
                    val===1 && player === 'p1' ? p1ball :
                    val===1 && freeBall === true && player === 'p2' ? p2freeBall :
                    val===1 && player === 'p2' ? p2ball :
                    <Image style={styles.ballImg} source={ballImage} /> }
                </View>
            </TouchableNativeFeedback>
        </View>
    )}
 
const styles = StyleSheet.create({
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
    ballImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'black'
    }
})
 
export default Ball