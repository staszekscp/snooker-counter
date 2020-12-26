import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback, Animated, Easing } from 'react-native';

import Ball from '../components/Ball'
 
const BallContainer = ({setP1Points, setP2Points, activeBallsP1, activeBallsP2, activateBallsP1, activateBallsP2,
    setOverlayP1, setOverlayP2, remaining, setRemaining, freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, freeBallButtonP1,
    setFreeBallButtonP1, freeBallButtonP2, setFreeBallButtonP2, setStatsP1, setStatsP2, setLongPotP1, longPotP1, setLongPotP2, longPotP2,
    currentBreakP1, currentBreakP2, setCurrentBreakP1, setCurrentBreakP2, proMode, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray, extraBlack}) => {
        
    const playerOne = 'p1'
    const playerTwo = 'p2'

        
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.35,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                })
            ]),
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 3,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true
                })
            ])
        ]).start()
    }

const fadeSectionLeft = useRef(new Animated.Value(0)).current
const fadeSectionRight = useRef(new Animated.Value(0)).current

const fadeSectionAnim = (anim, del) => {
    Animated.timing(anim, {
      toValue: 1,
      delay: del,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    fadeSectionAnim(fadeSectionLeft, 3000)
    fadeSectionAnim(fadeSectionRight, 3500)
  }, [])

    const [showP1Break, setShowP1Break] = useState(false)
    const [showP2Break, setShowP2Break] = useState(false)
    const [respottedBlack, setRespottedBlack] = useState(false)

    useEffect(() => {
        if (currentBreakP1 !== 0 && showP1Break) {
            fadeIn()
            setTimeout(() => {setShowP1Break(false)}, 1050)
        }
    }, [currentBreakP1])

    useEffect(() => {
        if (currentBreakP2 !== 0 && showP2Break) {
            fadeIn()
            setTimeout(() => {setShowP2Break(false)}, 1050)
        }
    }, [currentBreakP2])

    useEffect(() => {
        if (extraBlack) {
            setTimeout(() => {
                setRespottedBlack(true)
                fadeIn()
                setTimeout(() => {
                    setRespottedBlack(false)
                }, 1050)
            }, 1000)
            
        }
    }, [extraBlack])

    return (
        <View style={styles.main}>
            <View style={styles.ballSection}>
                    {respottedBlack && <Animated.View style={[styles.animatedRespottedView, {opacity: fadeAnim, transform: [{ scale:scaleAnim }]}]}>
                        <Text style={styles.respottedText}>RE-SPOTTED</Text>
                        <Text style={styles.respottedText}>BLACK</Text>
                    </Animated.View>}
                <Animated.View style={[styles.mainBallContainer, {opacity: fadeSectionLeft}]}> 
                    {showP1Break && <Animated.View style={[styles.animatedView, {opacity: fadeAnim, transform: [{ scale:scaleAnim }]}]}>
                        <Text style={styles.animatedText}>{currentBreakP1}</Text>
                    </Animated.View>}
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
                            setShowBreak={setShowP1Break}
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
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
                            activateOpponentsBalls={activateBallsP2}
                            setShowBreak={setShowP1Break}/>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.mainBallContainer, {opacity: fadeSectionRight}]}> 
                    {showP2Break && <Animated.View style={[styles.animatedView, {opacity: fadeAnim, transform: [{ scale:scaleAnim }]}]}>
                        <Text style={styles.animatedText}>{currentBreakP2}</Text>
                    </Animated.View>}
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
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
                            setShowBreak={setShowP2Break}/>
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
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
                            activateOpponentsBalls={activateBallsP1}
                            setShowBreak={setShowP2Break}/>
                    </View>
                </Animated.View>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    ballSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ballContainer: {
        flexDirection: 'row',
    },
    mainBallContainer: {
        marginTop: 20,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.01
    },
    borderContainer: {
        height: Dimensions.get('window').height <= 740 ? 60: 90
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
    },
    touchableFBPressed: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#050778',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableLong: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#99ff94',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
    animatedView: {
        position: 'absolute',
        zIndex: 4
    },
    animatedRespottedView: {
        position: 'absolute',
        zIndex: 5
    },
    animatedText: {
        fontSize: 70,
        fontFamily: 'scoreBold'
    },
    respottedText: {
        fontSize: 25,
        fontFamily: 'scoreBold',
        textAlign: 'center'
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
        top: Dimensions.get('window').height <= 740 ? 0: 30
    },
    green: {
        backgroundColor: '#029e0c',
    },
    brown: {
        backgroundColor: '#99001a',
        top: Dimensions.get('window').height <= 740 ? 0: 30
    },
    blue: {
        backgroundColor: '#0f1bff',
    },
    pink: {
        backgroundColor: '#ff8af7',
        top: Dimensions.get('window').height <= 740 ? 0: 30
    },
    black: {
        backgroundColor: '#333',
    },
    invisible: {
        opacity: 0
    }
})
 
export default BallContainer