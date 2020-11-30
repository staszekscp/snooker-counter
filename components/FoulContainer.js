import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
 
const FoulContainer = ({setP1Points, setP2Points, activateBallsP1, activateBallsP2, setOverlayP1, setOverlayP2,
    remaining, setRemaining, freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2, setLongPotP1, setLongPotP2,
    setCurrentBreakP1, setCurrentBreakP2,setStatsP1, setStatsP2, backwardMode, setBackwardMode, setCurrentShotIndex, modifyArray}) => {
    
    const foul = (p, val) => {
        if (backwardMode) {
            modifyArray()
            setBackwardMode(false)
        }
        setCurrentShotIndex(4)
        setOverlayP1(false)
        setOverlayP2(false)
        setCurrentBreakP1(0)
        setCurrentBreakP2(0)
        setLongPotP1(false)
        setLongPotP2(false)
        if (p === 1) {
            setP2Points(prev => prev+val)
            setStatsP1(prev => ({
                ...prev,
                foulPointsGivenAway: prev.foulPointsGivenAway+val
            }))
            setFreeBallButtonP1(false)
            setFreeBallButtonP2(remaining > 7)
            setFreeBallP1(false)
        } else {
            setP1Points(prev => prev+val)
            setStatsP2(prev => ({
                ...prev,
                foulPointsGivenAway: prev.foulPointsGivenAway+val
            }))
            setFreeBallButtonP1(remaining > 7)
            setFreeBallButtonP2(false)
            setFreeBallP2(false)
        }

        if (remaining === 34) {
            activateBallsP1(2)
            activateBallsP2(2)
            setOverlayP1(false)
            setOverlayP2(false)
            if (p === 1 && !freeBallP1 || p === 2 && !freeBallP2) {
                setRemaining(remaining - 7)
            }
        } else if (remaining > 27 && (remaining - 27)%8 === 0) {
            activateBallsP1(1)
            activateBallsP2(1)
        } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
            activateBallsP1(p === 1 ? 8 : 1)
            activateBallsP2(p === 2 ? 8 : 1)
            if (p === 1 && !freeBallP1 || p === 2 && !freeBallP2) {
                setRemaining(remaining - 7)
            }
        }
    }

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
                                foul(1, 4)
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
                                foul(1, 5)
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
                                foul(1, 6)
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
                                foul(1, 7)
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
                                foul(2, 4)
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
                                foul(2, 5)
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
                                foul(2, 6)
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
                                foul(2, 7)
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