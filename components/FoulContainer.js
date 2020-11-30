import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const FoulContainer = ({setP1Points, setP2Points, activateBallsP1, activateBallsP2, setOverlayP1, setOverlayP2,
    remaining, setRemaining, freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2, setLongPotP1, setLongPotP2,
    setCurrentBreakP1, setCurrentBreakP2,setStatsP1, setStatsP2, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray}) => {
    return (
        <View style={styles.main}>
            <View style={styles.mainFoulButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textFoul}>FOUL</Text>
                </View>
                <View style={styles.foulButtonContainer}>
                    <View style={remaining >= 22 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP1(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+4
                                }))
                                setCurrentBreakP1(0)
                                setLongPotP1(false)
                                setFreeBallButtonP1(false)
                                setFreeBallButtonP2(true)
                                setFreeBallP1(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(8)
                                    activateBallsP2(1)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP2Points(prev => prev+4)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>4</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={remaining >= 18 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP1(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+5
                                }))
                                setCurrentBreakP1(0)
                                setLongPotP1(false)
                                setFreeBallButtonP1(false)
                                setFreeBallButtonP2(true)
                                setFreeBallP1(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(8)
                                    activateBallsP2(1)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP2Points(prev => prev+5)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>5</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={remaining >= 13 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP1(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+6
                                }))
                                setCurrentBreakP1(0)
                                setLongPotP1(false)
                                setFreeBallButtonP1(false)
                                setFreeBallButtonP2(true)
                                setFreeBallP1(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(8)
                                    activateBallsP2(1)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP2Points(prev => prev+6)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>6</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.foulButton}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP1(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+7
                                }))
                                setCurrentBreakP1(0)
                                setLongPotP1(false)
                                if (remaining > 7) {
                                    setFreeBallButtonP1(false)
                                    setFreeBallButtonP2(true)
                                    setFreeBallP1(false)
                                } else {
                                    setFreeBallButtonP1(false)
                                    setFreeBallButtonP2(false)
                                    setFreeBallP1(false)
                                }
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(8)
                                    activateBallsP2(1)
                                    if (!freeBallP1) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP2Points(prev => prev+7)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>7</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                
            </View>
            <View style={styles.mainFoulButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textFoul}>FOUL</Text>
                </View>
                <View style={styles.foulButtonContainer}>
                    <View style={remaining >= 22 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP2(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+4
                                }))
                                setCurrentBreakP2(0)
                                setLongPotP2(false)
                                setFreeBallButtonP1(true)
                                setFreeBallButtonP2(false)
                                setFreeBallP2(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(8)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP1Points(prev => prev+4)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>4</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={remaining >= 18 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP2(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+5
                                }))
                                setCurrentBreakP2(0)
                                setLongPotP2(false)
                                setFreeBallButtonP1(true)
                                setFreeBallButtonP2(false)
                                setFreeBallP2(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(8)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP1Points(prev => prev+5)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>5</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={remaining >= 13 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP2(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+6
                                }))
                                setCurrentBreakP2(0)
                                setLongPotP2(false)
                                setFreeBallButtonP1(true)
                                setFreeBallButtonP2(false)
                                setFreeBallP2(false)
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(8)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP1Points(prev => prev+6)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>6</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.foulButton}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                if (backwardMode) {
                                    modifyArray()
                                    setBackwardMode(false)
                                }
                                setCurrentShotIndex(4)
                                setStatsP2(prev => ({
                                    ...prev,
                                    foulPointsGivenAway: prev.foulPointsGivenAway+7
                                }))
                                setCurrentBreakP2(0)
                                setLongPotP2(false)
                                if (remaining > 7) {
                                    setFreeBallButtonP1(true)
                                    setFreeBallButtonP2(false)
                                    setFreeBallP2(false)
                                } else {
                                    setFreeBallButtonP1(false)
                                    setFreeBallButtonP2(false)
                                    setFreeBallP2(false)
                                }
                                if (remaining === 34) {
                                    activateBallsP1(2)
                                    activateBallsP2(2)
                                    setOverlayP1(false)
                                    setOverlayP2(false)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                } else if (remaining > 27 && (remaining - 27)%8 === 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(1)
                                } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
                                    activateBallsP1(1)
                                    activateBallsP2(8)
                                    if (!freeBallP2) {
                                        setRemaining(remaining - 7)
                                    }
                                }
                                setP1Points(prev => prev+7)
                                setOverlayP1(false)
                                setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>7</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                
            </View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: 90,
        marginHorizontal: 3,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    mainFoulButtonContainer: {
        width: '50%',
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    foulButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    foulButton: {
        height: 50,
        width: 40,
        borderRadius: 15,
        borderWidth: 3,
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.35)'
    },
    foul: {
        height: 50,
        width: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%'
    },
    textFoul: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'score',
        fontSize: 16,
        color: '#e0de94'
    },
    textFoulPoints: {
        color: '#000',
        fontFamily: 'score',
        fontSize: 16,
        
    }
})
 
export default FoulContainer