import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground } from 'react-native';
 
const ScoreContainer = props => {
    return (
            <View style={{...styles.main, ...props.style}}>
                <View style={styles.mainContainer}>
                    <ImageBackground style={styles.background} source={require('../assets/png/wood.png')}>
                        <View style={styles.contentContainer}>
                            <View>
                                <View style={styles.undoRedoContainer}>
                                    <View style={styles.reRackButton}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            if (props.backwardMode) {
                                                props.setBackwardMode(false)
                                            }
                                            props.setStatsP1(prev => ({
                                                ...prev,
                                                long: prev.long + 0
                                            }))
                                            props.setPreviousShots([])
                                            props.setCurrentShotIndex(0)
                                            props.setP1Points(0)
                                            props.setP2Points(0)
                                            props.setRemaining(props.mode * 8 + 27)
                                            props.setOverlayP1(false)
                                            props.setOverlayP2(false)
                                            props.setCurrentBreakP1(0)
                                            props.setCurrentBreakP2(0)
                                            props.activateBallsP1(1)
                                            props.activateBallsP2(1)
                                            props.setFreeBallP1(false)
                                            props.setFreeBallP2(false)
                                            props.setFreeBallButtonP1(false)
                                            props.setFreeBallButtonP2(false)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.lateralButton}>
                                                <Text style={styles.buttonText}>Re-rack</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={props.currentShotIndex > 0 && props.previousShots.length > 1 ? styles.undoRedoButtonOn : styles.undoRedoButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={props.currentShotIndex < 1}
                                            onPress={() => {
                                                let shotIndex = props.currentShotIndex
                                                if (props.previousShots.length <= shotIndex) {
                                                    shotIndex = props.previousShots.length-1
                                                }
                                                if (shotIndex > 0) {
                                                    let val = shotIndex-1
                                                    props.setP1Points(props.previousShots[val].p1Points)
                                                    props.setP2Points(props.previousShots[val].p2Points)
                                                    props.setRemaining(props.previousShots[val].remaining)
                                                    props.activateP1(props.previousShots[val].activeBallsP1)
                                                    props.activateP2(props.previousShots[val].activeBallsP2)
                                                    props.setOverlayP1(props.previousShots[val].overlayP1),
                                                    props.setOverlayP2(props.previousShots[val].overlayP2),
                                                    props.setFreeBallP1(props.previousShots[val].freeBallP1),
                                                    props.setFreeBallP2(props.previousShots[val].freeBallP2),
                                                    props.setFreeBallButtonP1(props.previousShots[val].freeBallButtonP1),
                                                    props.setFreeBallButtonP2(props.previousShots[val].freeBallButtonP2),
                                                    props.setLongPotP1(props.previousShots[val].longPotP1),
                                                    props.setLongPotP2(props.previousShots[val].longPotP2),
                                                    props.setBreakP1(props.previousShots[val].breakP1),
                                                    props.setBreakP2(props.previousShots[val].breakP2),
                                                    props.setCurrentBreakP1(props.previousShots[val].currentBreakP1),
                                                    props.setCurrentBreakP2(props.previousShots[val].currentBreakP2),
                                                    props.setStatsP1(props.previousShots[val].statsP1),
                                                    props.setStatsP2(props.previousShots[val].statsP2)
                                                    
                                                    props.setCurrentShotIndex(val)
                                                    props.setBackwardMode(true)
                                                }
                                                }}
                                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                                <View style={styles.undoRedo}>
                                                    <Text style={styles.buttonText}>Undo</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={props.currentShotIndex <= props.previousShots.length-2 ? styles.undoRedoButtonOn : styles.undoRedoButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={props.currentShotIndex > props.previousShots.length-2}
                                            onPress={() => {
                                                let shotIndex = props.currentShotIndex
                                                if (props.previousShots.length <= shotIndex) {
                                                    shotIndex = props.previousShots.length-2
                                                }
                                                let val = shotIndex+1
                                                if (shotIndex < 4 && props.previousShots[val]) {
                                                    props.setP1Points(props.previousShots[val].p1Points)
                                                    props.setP2Points(props.previousShots[val].p2Points)
                                                    props.setRemaining(props.previousShots[val].remaining)
                                                    props.activateP1(props.previousShots[val].activeBallsP1)
                                                    props.activateP2(props.previousShots[val].activeBallsP2)
                                                    props.setOverlayP1(props.previousShots[val].overlayP1),
                                                    props.setOverlayP2(props.previousShots[val].overlayP2),
                                                    props.setFreeBallP1(props.previousShots[val].freeBallP1),
                                                    props.setFreeBallP2(props.previousShots[val].freeBallP2),
                                                    props.setFreeBallButtonP1(props.previousShots[val].freeBallButtonP1),
                                                    props.setFreeBallButtonP2(props.previousShots[val].freeBallButtonP2),
                                                    props.setLongPotP1(props.previousShots[val].longPotP1),
                                                    props.setLongPotP2(props.previousShots[val].longPotP2),
                                                    props.setBreakP1(props.previousShots[val].breakP1),
                                                    props.setBreakP2(props.previousShots[val].breakP2),
                                                    props.setCurrentBreakP1(props.previousShots[val].currentBreakP1),
                                                    props.setCurrentBreakP2(props.previousShots[val].currentBreakP2),
                                                    props.setStatsP1(props.previousShots[val].statsP1),
                                                    props.setStatsP2(props.previousShots[val].statsP2)
                                                    
                                                    props.setCurrentShotIndex(val)
                                                    props.setBackwardMode(true)
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
                                            props.navigation.navigate('Help')
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
                                    <Text style={props.p2Points-props.p1Points > props.remaining ? {...styles.names, ...styles.grey} : styles.names}>{props.p1Name.toUpperCase()}</Text>
                                </View>
                                
                                <View style={styles.p1}>
                                    <Text style={props.p1Points-props.p2Points > props.remaining ? {...styles.names, ...styles.grey, ...styles.p2} : {...styles.names, ...styles.p2}}>{props.p2Name.toUpperCase()}</Text>
                                </View>
                            </View>
                            <View style={styles.resultContainer}>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({props.p1Frames})</Text>
                                </View>
                                <View style={styles.scoreContainer}>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score} >{props.p1Points}</Text>
                                    </View>
                                    <View style={[styles.pointContainer, , {width: '20%'}]}>
                                        <Text style={styles.score}>:</Text>
                                    </View>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score}>{props.p2Points}</Text>
                                    </View>
                                </View>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({props.p2Frames})</Text>
                                </View>
                            </View>
                            <View style={styles.remainingPointsContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.remainingPoints}>ahead: {Math.abs(props.p1Points - props.p2Points)}        </Text>
                                    <Text style={styles.remainingPoints}>remaining: {props.remaining}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {

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
        color: 'white',
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
        color: 'white',
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
        color: 'white',
        fontFamily: 'score'
    },
    grey: {
        color: 'grey'
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
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    undoRedo: {
        height: 30,
        width: 50,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'score',
        fontSize: 10,
        textAlign: 'center',
        color: 'white'
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