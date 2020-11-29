import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image } from 'react-native';
 
const ScoreContainer = props => {
    return (
            <View style={{...styles.main, ...props.style}}>
                <View style={styles.frame}>
                    <ImageBackground style={styles.background} source={require('../assets/png/wood.png')}>
                        <View style={styles.frameContainer}>
                        <View>
                                <View style={styles.proModeContainer}>
                                    <View style={styles.reRackButton}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            if (props.backMode) {
                                                props.setBackMode(false)
                                            }
                                            props.setStatsP1(prev => ({
                                                ...prev,
                                                long: prev.long + 0
                                            }))
                                            props.setPrevShot([])
                                            props.setBack(0)
                                            props.p1Points(0)
                                            props.p2Points(0)
                                            props.setRemaining(props.mode * 8 + 27)
                                            props.setOverlayP1(false)
                                            props.setOverlayP2(false)
                                            props.setCurrentBreakP1(0)
                                            props.setCurrentBreakP2(0)
                                            props.activateBallsP1(1)
                                            props.activateBallsP2(1)
                                            props.setFreeBallModeP1(false)
                                            props.setFreeBallModeP2(false)
                                            props.setFreeBallP1(true)
                                            props.setFreeBallP2(true)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.btn}>
                                                <Text style={styles.proModeText}>Re-rack</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={props.back > 0 && props.prevShot.length > 1 ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={props.back < 1}
                                            onPress={() => {
                                                let back = props.back
                                                console.log(back)
                                                console.log(props.prevShot.length)
                                                if (props.prevShot.length <= back) {
                                                    back = props.prevShot.length-1
                                                }
                                                if (back > 0) {
                                                    let val = back-1
                                                    props.p1Points(props.prevShot[val].p1Points)
                                                    props.p2Points(props.prevShot[val].p2Points)
                                                    props.setRemaining(props.prevShot[val].remaining)
                                                    props.activateP1(props.prevShot[val].activeBallsP1)
                                                    props.activateP2(props.prevShot[val].activeBallsP2)
                                                    props.setOverlayP1(props.prevShot[val].overlayP1),
                                                    props.setOverlayP2(props.prevShot[val].overlayP2),
                                                    props.setFreeBallModeP1(props.prevShot[val].freeBallModeP1),
                                                    props.setFreeBallModeP2(props.prevShot[val].freeBallModeP2),
                                                    props.setFreeBallP1(props.prevShot[val].freeBallP1),
                                                    props.setFreeBallP2(props.prevShot[val].freeBallP2),
                                                    props.setLongPotP1(props.prevShot[val].longPotP1),
                                                    props.setLongPotP2(props.prevShot[val].longPotP2),
                                                    props.setBreakP1(props.prevShot[val].breakP1),
                                                    props.setBreakP2(props.prevShot[val].breakP2),
                                                    props.setCurrentBreakP1(props.prevShot[val].currentBreakP1),
                                                    props.setCurrentBreakP2(props.prevShot[val].currentBreakP2),
                                                    props.setStatsP1(props.prevShot[val].statsP1),
                                                    props.setStatsP2(props.prevShot[val].statsP2)
                                                    
                                                    props.setBack(val)
                                                    props.setBackMode(true)
                                                }
                                                }}
                                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                                <View style={styles.proMode}>
                                                    <Text style={styles.proModeText}>Undo</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={props.back <= props.prevShot.length-2 ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                            <TouchableNativeFeedback
                                            disabled={props.back > props.prevShot.length-2}
                                            onPress={() => {
                                                    let back = props.back
                                                    console.log(back)
                                                    if (props.prevShot.length <= back) {
                                                        back = props.prevShot.length-2
                                                    }
                                                    let val = back+1
                                                    if (back < 4 && props.prevShot[val]) {
                                                        props.p1Points(props.prevShot[val].p1Points)
                                                        props.p2Points(props.prevShot[val].p2Points)
                                                        props.setRemaining(props.prevShot[val].remaining)
                                                        props.activateP1(props.prevShot[val].activeBallsP1)
                                                        props.activateP2(props.prevShot[val].activeBallsP2)
                                                        props.setOverlayP1(props.prevShot[val].overlayP1),
                                                        props.setOverlayP2(props.prevShot[val].overlayP2),
                                                        props.setFreeBallModeP1(props.prevShot[val].freeBallModeP1),
                                                        props.setFreeBallModeP2(props.prevShot[val].freeBallModeP2),
                                                        props.setFreeBallP1(props.prevShot[val].freeBallP1),
                                                        props.setFreeBallP2(props.prevShot[val].freeBallP2),
                                                        props.setLongPotP1(props.prevShot[val].longPotP1),
                                                        props.setLongPotP2(props.prevShot[val].longPotP2),
                                                        props.setBreakP1(props.prevShot[val].breakP1),
                                                        props.setBreakP2(props.prevShot[val].breakP2),
                                                        props.setCurrentBreakP1(props.prevShot[val].currentBreakP1),
                                                        props.setCurrentBreakP2(props.prevShot[val].currentBreakP2),
                                                        props.setStatsP1(props.prevShot[val].statsP1),
                                                        props.setStatsP2(props.prevShot[val].statsP2)
                                                        
                                                        props.setBack(val)
                                                        props.setBackMode(true)
                                                    }
                                            }}
                                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                                <View style={styles.proMode}>
                                                    <Text style={styles.proModeText}>Redo</Text>
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
                                            <View style={styles.btn}>
                                                <Text style={styles.proModeText}>Help</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                        </View>
                            <View style={styles.namesContainer}>
                                <View style={styles.p1}>
                                    <Text style={props.p2-props.p1 > props.remaining ? {...styles.names, ...styles.grey} : styles.names}>{props.p1Name.toUpperCase()}</Text>
                                </View>
                                
                                <View style={styles.p1}>
                                    <Text style={props.p1-props.p2 > props.remaining ? {...styles.names, ...styles.grey, ...styles.p2} : {...styles.names, ...styles.p2}}>{props.p2Name.toUpperCase()}</Text>
                                </View>
                            </View>
                            <View style={styles.resultContainer}>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({props.f1})</Text>
                                </View>
                                <View style={styles.scoreContainer}>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score} >{props.p1}</Text>
                                    </View>
                                    <View style={[styles.pointContainer, , {width: '20%'}]}>
                                        <Text style={styles.score}>:</Text>
                                    </View>
                                    <View style={styles.pointContainer}>
                                        <Text style={styles.score}>{props.p2}</Text>
                                    </View>
                                </View>
                                <View style={styles.framesContainer}>
                                    <Text style={styles.frames}>({props.f2})</Text>
                                </View>
                            </View>
                            <View style={styles.remainingPointsContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.remainingPoints}>ahead: {Math.abs(props.p1 - props.p2)}        </Text>
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
    frame: {
        top: 5,
        width: '98%',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderTopWidth: 0
    },
    background: {

    },
    frameContainer: {
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
    proModeButtonOff: {
        height: 30,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        opacity: 0.4
    },
    proModeButtonOn: {
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
    btn: {
        height: 30,
        width: 70,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    proMode: {
        height: 30,
        width: 50,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    proModeText: {
        fontFamily: 'score',
        fontSize: 10,
        textAlign: 'center',
        color: 'white'
    },
    proModeContainer: {
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