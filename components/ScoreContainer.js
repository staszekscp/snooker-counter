import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Animated, Easing } from 'react-native';

import wood from '../assets/png/wood.png'

const ScoreContainer = ({p1Name, p2Name, p1Points,  p2Points, p1Frames, p2Frames, remaining, setRemaining,
setOverlayP1, setOverlayP2, setP1Points, setP2Points, activateP1, activateP2, activateBallsP1, activateBallsP2,
setCurrentBreakP1, setCurrentBreakP2, mode, setFreeBallP1, setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2,
setLongPotP1, setLongPotP2, setBreakP1, setBreakP2, setStatsP1, setStatsP2, previousShots, setPreviousShots,
currentShotIndex, setCurrentShotIndex, backwardMode, setBackwardMode, navigation, style}) => {

    const setShot = val => {
        setP1Points(previousShots[val].p1Points)
        setP2Points(previousShots[val].p2Points)
        setRemaining(previousShots[val].remaining)
        activateP1(previousShots[val].activeBallsP1)
        activateP2(previousShots[val].activeBallsP2)
        setOverlayP1(previousShots[val].overlayP1),
        setOverlayP2(previousShots[val].overlayP2),
        setFreeBallP1(previousShots[val].freeBallP1),
        setFreeBallP2(previousShots[val].freeBallP2),
        setFreeBallButtonP1(previousShots[val].freeBallButtonP1),
        setFreeBallButtonP2(previousShots[val].freeBallButtonP2),
        setLongPotP1(previousShots[val].longPotP1),
        setLongPotP2(previousShots[val].longPotP2),
        setBreakP1(previousShots[val].breakP1),
        setBreakP2(previousShots[val].breakP2),
        setCurrentBreakP1(previousShots[val].currentBreakP1),
        setCurrentBreakP2(previousShots[val].currentBreakP2),
        setStatsP1(previousShots[val].statsP1),
        setStatsP2(previousShots[val].statsP2)
        
        setCurrentShotIndex(val)
        setBackwardMode(true)
    }

    const start = useRef(new Animated.Value(-200)).current

    const startAnim = () => {
        Animated.timing(start, {
            toValue: 0,
            duration: 1500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        startAnim()
    }, [])

    return (
            <View style={{...styles.main, ...style}}>
                <Animated.View style={[styles.mainContainer, {transform: [{ translateY: start }]}]}>
                    <ImageBackground style={styles.background} source={wood}>
                        <View style={styles.contentContainer}>
                            <View>
                                <View style={styles.undoRedoContainer}>
                                    <View style={styles.reRackButton}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            if (backwardMode) {
                                                setBackwardMode(false)
                                            }
                                            setStatsP1(prev => ({
                                                ...prev,
                                                long: prev.long + 0
                                            }))
                                            setPreviousShots([])
                                            setCurrentShotIndex(0)
                                            setP1Points(0)
                                            setP2Points(0)
                                            setRemaining(mode * 8 + 27)
                                            setOverlayP1(false)
                                            setOverlayP2(false)
                                            setCurrentBreakP1(0)
                                            setCurrentBreakP2(0)
                                            activateBallsP1(1)
                                            activateBallsP2(1)
                                            setFreeBallP1(false)
                                            setFreeBallP2(false)
                                            setFreeBallButtonP1(false)
                                            setFreeBallButtonP2(false)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.lateralButton}>
                                                <Text style={styles.buttonText}>Re-rack</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={currentShotIndex > 0 && previousShots.length > 1 ? styles.undoRedoButtonOn : styles.undoRedoButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={currentShotIndex < 1}
                                            onPress={() => {
                                                let shotIndex = currentShotIndex
                                                if (previousShots.length <= shotIndex) {
                                                    shotIndex = previousShots.length-1
                                                }
                                                if (shotIndex > 0) {
                                                    let val = shotIndex-1
                                                    setShot(val)
                                                }
                                                }}
                                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                                <View style={styles.undoRedo}>
                                                    <Text style={styles.buttonText}>Undo</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={currentShotIndex <= previousShots.length-2 ? styles.undoRedoButtonOn : styles.undoRedoButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={currentShotIndex > previousShots.length-2}
                                            onPress={() => {
                                                let shotIndex = currentShotIndex
                                                if (previousShots.length <= shotIndex) {
                                                    shotIndex = previousShots.length-2
                                                }
                                                let val = shotIndex+1
                                                if (shotIndex < 4 && previousShots[val]) {
                                                    setShot(val)
                                                }
                                            }}
                                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                                <View style={styles.undoRedo}>
                                                    <Text style={styles.buttonText}>Redo</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    </View>
                                    <View style={styles.helpButton}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            navigation.navigate('Help')
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.lateralButton}>
                                                <Text style={styles.buttonText}>Help</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.namesContainer}>
                                <View style={styles.p1}>
                                    <Text style={p2Points-p1Points > remaining ? {...styles.names, ...styles.grey} : styles.names}>{p1Name.toUpperCase()}</Text>
                                </View>
                                
                                <View style={styles.p1}>
                                    <Text style={p1Points-p2Points > remaining ? {...styles.names, ...styles.grey, ...styles.p2} : {...styles.names, ...styles.p2}}>{p2Name.toUpperCase()}</Text>
                                </View>
                            </View>
                            <View style={styles.resultContainer}>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({p1Frames})</Text>
                                </View>
                                <View style={styles.scoreContainer}>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score} >{p1Points}</Text>
                                    </View>
                                    <View style={[styles.pointContainer, , {width: '20%'}]}>
                                        <Text style={styles.score}>:</Text>
                                    </View>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score}>{p2Points}</Text>
                                    </View>
                                </View>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({p2Frames})</Text>
                                </View>
                            </View>
                            <View style={styles.remainingPointsContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.remainingPoints}>ahead: {Math.abs(p1Points - p2Points)}        </Text>
                                    <Text style={styles.remainingPoints}>remaining: {remaining}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        justifyContent: 'center'
    },
    mainContainer: {
        top: 5,
        width: '98%',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderTopWidth: 0
    },
    contentContainer: {
        backgroundColor: 'rgba(60,5,0,0.6)'
    },
    namesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5
    },
    names: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
        fontFamily: 'score',
        color: '#e0de94'
    },
    resultContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        paddingBottom: 5
    },
    scoreContainer: {
        flexDirection: 'row',
        width: '60%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    score: {
        fontSize: 36,
        color: '#e0de94',
        fontFamily: 'score'
    },
    pointContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    frames: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'score'
    },
    framesContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    remainingPointsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    remainingPoints: {
        color: '#fff',
        fontFamily: 'score'
    },
    grey: {
        color: '#7a7a67'
    },
    undoRedoButtonOff: {
        height: 30,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        opacity: 0.4
    },
    undoRedoButtonOn: {
        height: 30,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)'
    },
    reRackButton: {
        height: 30,
        width: 70,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0,0.2)'
    },
    helpButton: {
        height: 30,
        width: 70,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 0,0.2)'
    },
    lateralButton: {
        height: 30,
        width: 70,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    undoRedo: {
        height: 30,
        width: 50,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'score',
        fontSize: 10,
        textAlign: 'center',
        color: '#fff'
    },
    undoRedoContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        paddingVertical: 5,
        borderBottomWidth: 3,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    p1: {
        width: '50%',
        paddingHorizontal: 10
    },
    p2: {
        textAlign: 'right'
    }
})
 
export default ScoreContainer