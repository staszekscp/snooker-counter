import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Dimensions, TouchableNativeFeedback, ImageBackground, View, Text, ScrollView, Animated} from 'react-native';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'

const FrameOverScreen = ({mode, proMode, p1Frames, p2Frames, p1Name, p2Name, p1Points, p2Points, statsP1, statsP2,
    successP1, successP2, breakP1, breakP2, setEndOfFrame, setP1Points, setP2Points, setRemaining, setOverlayP1, setOverlayP2,
    setCurrentBreakP1, setCurrentBreakP2, activateBallsP1, activateBallsP2, setFrameRecord, setEndOfMatch, setPreviousShots, backwardMode,
    setBackwardMode, setCurrentShotIndex, setLongPotP1, setLongPotP2, startNewFrame}) => {

    const [sureModal, setSureModal] = useState(false)

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 750,
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 750,
            useNativeDriver: true
        }).start()
    }

    const endFrame = (end) => {
        fadeOut()
        if (end === "M") { 
                setEndOfFrame(false)
                setEndOfMatch(true)
        } else {
            setTimeout(() => {
                startNewFrame()
                setEndOfFrame(false)
        }, 750)}
    }

    useEffect(() => {
        fadeIn()
    }, [])

    const fadeAnimModal = useRef(new Animated.Value(0)).current

    const fadeInModal = val => {
        Animated.timing(fadeAnimModal, {
        toValue: val,
        duration: 500,
        useNativeDriver: true
        }).start();
    };

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.clothImage} source={cloth}>
            {sureModal && <Animated.View style={[styles.mainOverlay, {opacity: fadeAnimModal}]}>
                    <Animated.View style={[styles.endOfFrameContainer, {opacity: fadeAnimModal}]}>
                        <ImageBackground style={styles.backgroundImageModal} source={wood}>
                            <View style={styles.coverSmall}>
                            <Text style={styles.endOfFrameMessageTextHeader}>WARNING</Text>
                                <View style={styles.endOfFrameMessage}>
                                    <View style={styles.resultContainer}>
                                        <Text style={styles.endOfFrameMessageTextName}>Do you really want to end the match?</Text>
                                    </View>
                                </View>
                                <View style={styles.buttonsContainer}>
                                    <View style={styles.smallButtonContainerNo}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            fadeInModal(0)
                                            setTimeout(() => {
                                                setSureModal(false)}, 750)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.smallButton}>
                                                <Text style={styles.smallButtonText}>NO</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={styles.smallButtonContainerOk}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            if (backwardMode) {
                                                setBackwardMode(false)
                                            }
                                            setPreviousShots([])
                                            setCurrentShotIndex(0)
                                            setFrameRecord(prev => ([
                                                ...prev,
                                                {p1: p1Points,
                                                p2: p2Points,
                                                key: p1Frames+p2Frames}
                                            ]))
                                            setRemaining(mode * 8 + 27)
                                            endFrame("M")
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.smallButton}>
                                                <Text style={styles.smallButtonText}>YES</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </Animated.View>
                </Animated.View>}
            <ScrollView contentContainerStyle={styles.summaryContainer}>
                <Animated.View style={{opacity: fadeAnim, borderWidth: 3}}>
                    <ImageBackground style={styles.woodImage} source={wood}>
                        <View style={styles.cover}>
                            <View style={styles.topContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>MATCH STATS</Text></Text>
                            </View>
                            <View style={styles.matchResultContainer}>
                                <View><Text style={p1Frames > p2Frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{p1Name.toUpperCase()}</Text></View>
                                <View>
                                    <Text>
                                        <Text style={p1Frames > p2Frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult} >{p1Frames}</Text> 
                                        <Text style={styles.textFrameResult}> : </Text> 
                                        <Text style={p1Frames < p2Frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult}>{p2Frames}</Text>
                                    </Text>
                                </View>
                                <View><Text style={p1Frames < p2Frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{p2Name.toUpperCase()}</Text></View>
                            </View>
                            <View style={styles.statsContainer}>
                                <View style={styles.p1Stats}>
                                    <View><Text style={statsP1.points > statsP2.points? styles.textBetter : styles.text}>{statsP1.points}</Text></View>
                                    <View><Text style={statsP1.pots > statsP2.pots ? styles.textBetter : styles.text}>{statsP1.pots}</Text></View>
                                    <View><Text style={successP1.potSuccess > successP2.potSuccess? styles.textBetter : styles.text}>{Math.round(successP1.potSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : successP1.longPotSuccess > successP2.longPotSuccess? styles.textBetter : styles.text}>{Math.round(successP1.longPotSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : successP1.safetySuccess > successP2.safetySuccess? styles.textBetter : styles.text}>{Math.round(successP1.safetySuccess)}%</Text></View>
                                    <View><Text style={breakP1 > breakP2 ? styles.textBetter : styles.text}>{breakP1}</Text></View>
                                </View>
                                <View style={styles.statNames}>
                                    <View><Text style={styles.text}>TOTAL POINTS</Text></View>
                                    <View><Text style={styles.text}>BALLS POTTED</Text></View>
                                    <View><Text style={styles.text}>POT SUCCESS</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : styles.text}>LONG POT SUCCESS</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : styles.text}>SAFETY SUCCESS</Text></View>
                                    <View><Text style={styles.text}>HIGHEST BREAK</Text></View>
                                </View>
                                <View style={styles.p2Stats}>
                                    <View><Text style={statsP1.points < statsP2.points? styles.textBetter : styles.text}>{statsP2.points}</Text></View>
                                    <View><Text style={statsP1.pots < statsP2.pots? styles.textBetter : styles.text}>{statsP2.pots}</Text></View>
                                    <View><Text style={successP1.potSuccess < successP2.potSuccess? styles.textBetter : styles.text}>{Math.round(successP2.potSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : successP1.longPotSuccess < successP2.longPotSuccess? styles.textBetter : styles.text}>{Math.round(successP2.longPotSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : successP1.safetySuccess < successP2.safetySuccess? styles.textBetter : styles.text}>{Math.round(successP2.safetySuccess)}%</Text></View>
                                    <View><Text style={breakP1 < breakP2? styles.textBetter : styles.text}>{breakP2}</Text></View>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                            <View style={styles.nextFrame}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    if (backwardMode) {
                                        setBackwardMode(false)
                                    }
                                    setPreviousShots([])
                                    setCurrentShotIndex(0)
                                    setFrameRecord(prev => ([
                                        ...prev,
                                        {p1: p1Points,
                                        p2: p2Points,
                                        key: p1Frames+p2Frames}
                                    ]))
                                    setP1Points(0)
                                    setP2Points(0)
                                    setRemaining(mode * 8 + 27)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    setCurrentBreakP1(0)
                                    setCurrentBreakP2(0)
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                    setLongPotP1(false)
                                    setLongPotP2(false)
                                    endFrame("F")
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.nextFrameButton}>
                                        <Text style={styles.nextFrameText}>NEXT FRAME</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={styles.endMatch}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    setSureModal(true)
                                    fadeInModal(1)
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.endMatchButton}>
                                        <Text style={styles.endMatchText}>END GAME</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    mainOverlay: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    endOfFrameContainer: {
        height: Dimensions.get('window').height <= 740 ? '40%' : '30%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        },
        backgroundImageModal: {
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        coverSmall: {
            backgroundColor: 'rgba(60,5,0, 0.6)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
           },
        endOfFrameMessage: {
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            paddingVertical: 10,
            margin: 5,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        endOfFrameMessageTextHeader: {
            color: '#e0de94',
            fontFamily: 'scoreBold',
            fontSize: 20, 
            marginBottom: 10,
            textAlign: 'center'
        },
        endOfFrameMessageTextName: {
            color: '#fff',
            fontFamily: 'scoreBold',
            fontSize: 16, 
            textAlign: 'center'
        },
        endOfFrameMessageTextPoints: {
            color: '#e0de94',
            fontFamily: 'scoreBold',
            fontSize: 20, 
            textAlign: 'center'
        },
        endOfFrameMessageText: {
            color: '#ddd',
            fontFamily: 'scoreBold',
            fontSize: 16,
            textAlign: 'justify',
            padding: 10
        },
        resultContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10
        },
        buttonsContainer:{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        smallButtonContainerNo: {
            height: 40,
            width: 100,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            margin: 5
        },
        smallButtonContainerOk: {
            height: 40,
            width: 100,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            margin: 5
        },
        smallButton: {
            height: 40,
            width: 100,
            borderRadius: 15,
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        smallButtonText: {
            color: '#bbb',
            fontFamily: 'score',
            fontSize: 14,
            textAlign: 'center'
        },
    clothImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    woodImage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    summaryContainer: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 30,
        top:100
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        width: '100%',
        padding: 20
       },
    topContainer: {
        marginBottom: 10
    },
    matchResultContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: 5,
        marginTop: 20
    },
    p1Stats: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    statNames: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },
    p2Stats: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    text: {
        color: '#fff',
        fontFamily: 'score'
    },
    textBetter: {
        color: '#e0de94',
        fontFamily: 'score'
    },
    textPlayerName: {
        color: '#fff',
        fontFamily: 'score',
        fontSize: 16,
        width: 100,
        textAlign: 'center'
    },
    textMainHeader: {
        color: '#fff',
        fontFamily: 'score',
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 30
    },
    textFrameResult: {
        color: '#fff',
        fontFamily: 'score',
        textAlign: 'center',
        fontSize: 30,
        width: 25
    },
    nextFrame: {
        height: 60,
        width: 140,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.4)',
        marginBottom: 5
    },
    nextFrameButton: {
        height: 60,
        width: 140,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextFrameText: {
        color: '#000',
        fontFamily: 'scoreBold',
        fontSize: 18
    },
    endMatch: {
        height: 40,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        marginVertical: 5
    },
    endMatchButton: {
        height: 40,
        width: 100,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    endMatchText: {
        color: '#bbb',
        fontFamily: 'score',
        fontSize: 14
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

export default FrameOverScreen