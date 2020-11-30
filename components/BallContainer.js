import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

import Ball from '../components/Ball'
 
const BallContainer = props => {
    const playerOne = 'p1'
    const playerTwo = 'p2'

    return (
        <View style={styles.main}>
            <View style={styles.ballSection}>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!props.activeBallsP1['2'] ? {...styles.ball, ...styles.yellow, ...styles.invisible} : {...styles.ball, ...styles.yellow}} 
                            activeBalls={props.activeBallsP1}
                            val={2} 
                            setPoints={props.setP1Points} 
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}
                            />
                        <Ball 
                            style={!props.activeBallsP1['3'] ? {...styles.ball, ...styles.green, ...styles.invisible} : {...styles.ball, ...styles.green}} 
                            activeBalls={props.activeBallsP1}
                            val={3} 
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                        <Ball 
                            style={!props.activeBallsP1['4'] ? {...styles.ball, ...styles.brown, ...styles.invisible} : {...styles.ball, ...styles.brown}} 
                            activeBalls={props.activeBallsP1}
                            val={4} 
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                        <View style={!props.proMode ? {opacity: 0} : props.longPotP1 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                props.setLongPotP1(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={props.longPotP1 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={!props.activeBallsP1['1'] ? {...styles.ball, ...styles.red, ...styles.invisible} : {...styles.ball, ...styles.red}} 
                            activeBalls={props.activeBallsP1}
                            val={1} 
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            freeBall={props.freeBallP1}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}  
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                        <View style={!props.freeBallButtonP1 ? {...styles.touchableFB, ...styles.invisible} : !props.freeBallP1 ? styles.touchableFB : styles.touchableFBPressed}>
                            <TouchableNativeFeedback
                                disabled={!props.freeBallButtonP1}
                                onPress={() => {
                                    props.setFreeBallP1(prev => !prev)
                                    props.setOverlayP2(!props.freeBallP1)
                                    props.setLongPotP2(false)
                                    if (props.freeBallP1 && props.remaining < 35) {
                                        if (props.remaining === 27) {
                                            props.activateBallsP1(2)
                                        } else if (props.remaining === 25) {
                                            props.activateBallsP1(3)
                                        } else if (props.remaining === 22) {
                                            props.activateBallsP1(4)
                                        } else if (props.remaining === 18) {
                                            props.activateBallsP1(5)
                                        } else if (props.remaining === 13) {
                                            props.activateBallsP1(6)
                                        }
                                    } else {
                                        props.activateBallsP1(1)
                                    }
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={props.freeBallP1 ? styles.buttonTextFBPressed : styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!props.activeBallsP1['5'] ? {...styles.ball, ...styles.blue, ...styles.invisible} : {...styles.ball, ...styles.blue}} 
                            activeBalls={props.activeBallsP1}
                            val={5} 
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                        <Ball 
                            style={!props.activeBallsP1['6'] ? {...styles.ball, ...styles.pink, ...styles.invisible} : {...styles.ball, ...styles.pink}} 
                            activeBalls={props.activeBallsP1}
                            val={6}
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                        <Ball 
                            style={!props.activeBallsP1['7'] ? {...styles.ball, ...styles.black, ...styles.invisible} : {...styles.ball, ...styles.black}} 
                            activeBalls={props.activeBallsP1}
                            val={7}
                            setPoints={props.setP1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP1}
                            activateOpponentsBalls={props.activateBallsP2}/>
                    </View>
                </View>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!props.activeBallsP2['2'] ? {...styles.ball, ...styles.yellow, ...styles.invisible} : {...styles.ball, ...styles.yellow}} 
                            activeBalls={props.activeBallsP2}
                            val={2}
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                        <Ball 
                            style={!props.activeBallsP2['3'] ? {...styles.ball, ...styles.green, ...styles.invisible} : {...styles.ball, ...styles.green}} 
                            activeBalls={props.activeBallsP2}
                            val={3}
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                        <Ball 
                            style={!props.activeBallsP2['4'] ? {...styles.ball, ...styles.brown, ...styles.invisible} : {...styles.ball, ...styles.brown}} 
                            activeBalls={props.activeBallsP2}
                            val={4} 
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                    <View style={!props.freeBallButtonP2 ? {...styles.touchableFB, ...styles.invisible} : !props.freeBallP2 ? styles.touchableFB : styles.touchableFBPressed}>
                            <TouchableNativeFeedback
                                disabled={!props.freeBallButtonP2}
                                onPress={() => {
                                    props.setFreeBallP2(prev => !prev)
                                    props.setOverlayP1(!props.freeBallP2)
                                    props.setLongPotP1(false)
                                    if (props.freeBallP2 && props.remaining < 35) {
                                        if (props.remaining === 27) {
                                            props.activateBallsP2(2)
                                        } else if (props.remaining === 25) {
                                            props.activateBallsP2(3)
                                        } else if (props.remaining === 22) {
                                            props.activateBallsP2(4)
                                        } else if (props.remaining === 18) {
                                            props.activateBallsP2(5)
                                        } else if (props.remaining === 13) {
                                            props.activateBallsP2(6)
                                        }
                                    } else {
                                        props.activateBallsP2(1)
                                    }
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={props.freeBallP2 ? styles.buttonTextFBPressed : styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={!props.activeBallsP2['1'] ? {...styles.ball, ...styles.red, ...styles.invisible} : {...styles.ball, ...styles.red}} 
                            activeBalls={props.activeBallsP2}
                            val={1} 
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            freeBall={props.freeBallP2}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2} 
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                        <View style={!props.proMode ? {opacity: 0} : props.longPotP2 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                props.setLongPotP2(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={props.longPotP2 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!props.activeBallsP2['5'] ? {...styles.ball, ...styles.blue, ...styles.invisible} : {...styles.ball, ...styles.blue}} 
                            activeBalls={props.activeBallsP2}
                            val={5} 
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}
                            />
                        <Ball 
                            style={!props.activeBallsP2['6'] ? {...styles.ball, ...styles.pink, ...styles.invisible} : {...styles.ball, ...styles.pink}} 
                            activeBalls={props.activeBallsP2}
                            val={6}
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                        <Ball 
                            style={!props.activeBallsP2['7'] ? {...styles.ball, ...styles.black, ...styles.invisible} : {...styles.ball, ...styles.black}} 
                            activeBalls={props.activeBallsP2}
                            val={7} 
                            setPoints={props.setP2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBallButtonP1={props.setFreeBallButtonP1} 
                            setFreeBallButtonP2={props.setFreeBallButtonP2}
                            setStats={props.setStatsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backwardMode={props.backwardMode}
                            setBackwardMode={props.setBackwardMode}
                            setCurrentShotIndex={props.setCurrentShotIndex}
                            modifyArray={props.modifyArray}
                            activateBalls={props.activateBallsP2}
                            activateOpponentsBalls={props.activateBallsP1}/>
                    </View>
                </View>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    ballSection: {
        flexDirection: 'row'
    },
    ballContainer: {
        flexDirection: 'row',
    },
    mainBallContainer: {
        paddingTop: 20,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.01
    },
    borderContainer: {
        height: 90
    },
    centralContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touchableFB: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#9ecdff',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
    },
    touchableFBPressed: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#050778',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
    },
    touchableLong: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#99ff94',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 2,
    },
    touchableLongPressed: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#006905',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 2,
    },
    buttonFB: {
        height: 30,
        width: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    buttonLong: {
        height: 30,
        width: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'scoreBold',
        color: '#000'
    },
    buttonTextLongPressed: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'score',
        color: '#fff'
    },
    buttonTextFBPressed: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'score',
        color: '#fff'
    },
    ball: {
        height: 49,
        width: 49,
        borderRadius: 24.5,
        margin: 5
    },
    red: {
        backgroundColor: '#ff0022',
        margin: 10
    },
    yellow: {
        backgroundColor: '#fbff00',
        top: 30
    },
    green: {
        backgroundColor: '#029e0c',
    },
    brown: {
        backgroundColor: '#99001a',
        top: 30
    },
    blue: {
        backgroundColor: '#0f1bff',
    },
    pink: {
        backgroundColor: '#ff8af7',
        top: 30
    },
    black: {
        backgroundColor: '#333',
    },
    invisible: {
        opacity: 0
    }
})
 
export default BallContainer