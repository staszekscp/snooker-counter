import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

import Ball from '../components/Ball'
 
const BallContainer = ({setP1Points, setP2Points, activeBallsP1, activeBallsP2, activateBallsP1, activateBallsP2,
    setOverlayP1, setOverlayP2, remaining, setRemaining, freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, freeBallButtonP1,
    setFreeBallButtonP1, freeBallButtonP2, setFreeBallButtonP2, setStatsP1, setStatsP2, setLongPotP1, longPotP1, setLongPotP2, longPotP2,
    setCurrentBreakP1, setCurrentBreakP2, proMode, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray}) => {
    const playerOne = 'p1'
    const playerTwo = 'p2'

    return (
        <View style={styles.main}>
            <View style={styles.ballSection}>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!activeBallsP1['2'] ? {...styles.ball, ...styles.yellow, ...styles.invisible} : {...styles.ball, ...styles.yellow}} 
                            activeBalls={activeBallsP1}
                            val={2} 
                            setPoints={setP1Points} 
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}
                            />
                        <Ball 
                            style={!activeBallsP1['3'] ? {...styles.ball, ...styles.green, ...styles.invisible} : {...styles.ball, ...styles.green}} 
                            activeBalls={activeBallsP1}
                            val={3} 
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                        <Ball 
                            style={!activeBallsP1['4'] ? {...styles.ball, ...styles.brown, ...styles.invisible} : {...styles.ball, ...styles.brown}} 
                            activeBalls={activeBallsP1}
                            val={4} 
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                        <View style={!proMode ? {opacity: 0} : longPotP1 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                setLongPotP1(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={longPotP1 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={!activeBallsP1['1'] ? {...styles.ball, ...styles.red, ...styles.invisible} : {...styles.ball, ...styles.red}} 
                            activeBalls={activeBallsP1}
                            val={1} 
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            freeBall={freeBallP1}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}  
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                        <View style={!freeBallButtonP1 ? {...styles.touchableFB, ...styles.invisible} : !freeBallP1 ? styles.touchableFB : styles.touchableFBPressed}>
                            <TouchableNativeFeedback
                                disabled={!freeBallButtonP1}
                                onPress={() => {
                                    setFreeBallP1(prev => !prev)
                                    setOverlayP2(!freeBallP1)
                                    setLongPotP2(false)
                                    if (freeBallP1 && remaining < 35) {
                                        if (remaining === 27) {
                                            activateBallsP1(2)
                                        } else if (remaining === 25) {
                                            activateBallsP1(3)
                                        } else if (remaining === 22) {
                                            activateBallsP1(4)
                                        } else if (remaining === 18) {
                                            activateBallsP1(5)
                                        } else if (remaining === 13) {
                                            activateBallsP1(6)
                                        }
                                    } else {
                                        activateBallsP1(1)
                                    }
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={freeBallP1 ? styles.buttonTextFBPressed : styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!activeBallsP1['5'] ? {...styles.ball, ...styles.blue, ...styles.invisible} : {...styles.ball, ...styles.blue}} 
                            activeBalls={activeBallsP1}
                            val={5} 
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                        <Ball 
                            style={!activeBallsP1['6'] ? {...styles.ball, ...styles.pink, ...styles.invisible} : {...styles.ball, ...styles.pink}} 
                            activeBalls={activeBallsP1}
                            val={6}
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                        <Ball 
                            style={!activeBallsP1['7'] ? {...styles.ball, ...styles.black, ...styles.invisible} : {...styles.ball, ...styles.black}} 
                            activeBalls={activeBallsP1}
                            val={7}
                            setPoints={setP1Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerOne}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP1}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP1}
                            setLongPot={setLongPotP1}
                            longPot={longPotP1}
                            setCurrentBreak={setCurrentBreakP1}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP1}
                            activateOpponentsBalls={activateBallsP2}/>
                    </View>
                </View>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!activeBallsP2['2'] ? {...styles.ball, ...styles.yellow, ...styles.invisible} : {...styles.ball, ...styles.yellow}} 
                            activeBalls={activeBallsP2}
                            val={2}
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
                        <Ball 
                            style={!activeBallsP2['3'] ? {...styles.ball, ...styles.green, ...styles.invisible} : {...styles.ball, ...styles.green}} 
                            activeBalls={activeBallsP2}
                            val={3}
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
                        <Ball 
                            style={!activeBallsP2['4'] ? {...styles.ball, ...styles.brown, ...styles.invisible} : {...styles.ball, ...styles.brown}} 
                            activeBalls={activeBallsP2}
                            val={4} 
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                    <View style={!freeBallButtonP2 ? {...styles.touchableFB, ...styles.invisible} : !freeBallP2 ? styles.touchableFB : styles.touchableFBPressed}>
                            <TouchableNativeFeedback
                                disabled={!freeBallButtonP2}
                                onPress={() => {
                                    setFreeBallP2(prev => !prev)
                                    setOverlayP1(!freeBallP2)
                                    setLongPotP1(false)
                                    if (freeBallP2 && remaining < 35) {
                                        if (remaining === 27) {
                                            activateBallsP2(2)
                                        } else if (remaining === 25) {
                                            activateBallsP2(3)
                                        } else if (remaining === 22) {
                                            activateBallsP2(4)
                                        } else if (remaining === 18) {
                                            activateBallsP2(5)
                                        } else if (remaining === 13) {
                                            activateBallsP2(6)
                                        }
                                    } else {
                                        activateBallsP2(1)
                                    }
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={freeBallP2 ? styles.buttonTextFBPressed : styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={!activeBallsP2['1'] ? {...styles.ball, ...styles.red, ...styles.invisible} : {...styles.ball, ...styles.red}} 
                            activeBalls={activeBallsP2}
                            val={1} 
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            freeBall={freeBallP2}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2} 
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
                        <View style={!proMode ? {opacity: 0} : longPotP2 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                setLongPotP2(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={longPotP2 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={!activeBallsP2['5'] ? {...styles.ball, ...styles.blue, ...styles.invisible} : {...styles.ball, ...styles.blue}} 
                            activeBalls={activeBallsP2}
                            val={5} 
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}
                            />
                        <Ball 
                            style={!activeBallsP2['6'] ? {...styles.ball, ...styles.pink, ...styles.invisible} : {...styles.ball, ...styles.pink}} 
                            activeBalls={activeBallsP2}
                            val={6}
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
                        <Ball 
                            style={!activeBallsP2['7'] ? {...styles.ball, ...styles.black, ...styles.invisible} : {...styles.ball, ...styles.black}} 
                            activeBalls={activeBallsP2}
                            val={7} 
                            setPoints={setP2Points}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            player={playerTwo}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBall={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1} 
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStats={setStatsP2}
                            setLongPot={setLongPotP2}
                            longPot={longPotP2}
                            setCurrentBreak={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            activateBalls={activateBallsP2}
                            activateOpponentsBalls={activateBallsP1}/>
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