import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
 
const FoulContainer = props => {
    return (
        <View style={styles.main}>
            <View style={styles.mainFoulButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textFoul}>FOUL</Text>
                </View>
                <View style={styles.foulButtonContainer}>
                    <View style={props.remaining >= 22 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP1(0)
                                props.setLongPotP1(false)
                                props.setFreeBP1(true)
                                props.setFreeBP2(false)
                                props.setFreeBallP1(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p2Points(prev => prev+4)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>4</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={props.remaining >= 18 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP1(0)
                                props.setLongPotP1(false)
                                props.setFreeBP1(true)
                                props.setFreeBP2(false)
                                props.setFreeBallP1(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p2Points(prev => prev+5)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>5</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={props.remaining >= 13 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP1(0)
                                props.setLongPotP1(false)
                                props.setFreeBP1(true)
                                props.setFreeBP2(false)
                                props.setFreeBallP1(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p2Points(prev => prev+6)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
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
                                props.setCurrentBreakP1(0)
                                props.setLongPotP1(false)
                                if (props.remaining > 7) {
                                    props.setFreeBP1(true)
                                    props.setFreeBP2(false)
                                    props.setFreeBallP1(false)
                                } else {
                                    props.setFreeBP1(true)
                                    props.setFreeBP2(true)
                                    props.setFreeBallP1(false)
                                }
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    if (!props.fbP1) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p2Points(prev => prev+7)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
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
                    <View style={props.remaining >= 22 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP2(0)
                                props.setLongPotP2(false)
                                props.setFreeBP1(false)
                                props.setFreeBP2(true)
                                props.setFreeBallP2(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p1Points(prev => prev+4)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>4</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={props.remaining >= 18 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP2(0)
                                props.setLongPotP2(false)
                                props.setFreeBP1(false)
                                props.setFreeBP2(true)
                                props.setFreeBallP2(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p1Points(prev => prev+5)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                            >
                            <View style={styles.foul}>
                                <Text style={styles.textFoulPoints}>5</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={props.remaining >= 13 ? styles.foulButton : {display: 'none'}}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                props.setCurrentBreakP2(0)
                                props.setLongPotP2(false)
                                props.setFreeBP1(false)
                                props.setFreeBP2(true)
                                props.setFreeBallP2(false)
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p1Points(prev => prev+6)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
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
                                props.setCurrentBreakP2(0)
                                props.setLongPotP2(false)
                                if (props.remaining > 7) {
                                    props.setFreeBP1(false)
                                    props.setFreeBP2(true)
                                    props.setFreeBallP2(false)
                                } else {
                                    props.setFreeBP1(true)
                                    props.setFreeBP2(true)
                                    props.setFreeBallP2(false)
                                }
                                if (props.remaining === 34) {
                                    props.activateP1({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 === 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                } else if (props.remaining > 27 && (props.remaining - 27)%8 !== 0) {
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                    props.activateP2({
                                        '1': true,
                                        '2': false,
                                        '3': false,
                                        '4': false,
                                        '5': false,
                                        '6': false,
                                        '7': false})
                                    if (!props.fbP2) {
                                        props.setRemaining(props.remaining - 7)
                                    }
                                }
                                props.p1Points(prev => prev+7)
                                props.setOverlayP1(false)
                                props.setOverlayP2(false)
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
        borderColor: 'black',
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
        color: 'white',
        fontFamily: 'score',
        fontSize: 16,
        color: '#e0de94'
    },
    textFoulPoints: {
        color: 'black',
        fontFamily: 'score',
        fontSize: 16,
        
    }
})
 
export default FoulContainer