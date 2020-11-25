import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image } from 'react-native';
 
const ScoreContainer = props => {
    return (
            <View style={{...styles.main, ...props.style}}>
                <View style={styles.frame}>
                    <ImageBackground style={styles.background} source={require('../assets/png/wood.png')}>
                        <View style={styles.frameContainer}>
                            <View style={styles.namesContainer}>
                                <View style={styles.p1}>
                                    <Text style={props.p2-props.p1 > props.remaining ? {...styles.names, ...styles.grey} : styles.names}>{props.p1Name.toUpperCase()}</Text>
                                </View>
                                <View style={styles.proModeContainer}>
                                    <View style={props.proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            props.setProMode(true)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.proMode}>
                                                <Text style={styles.proModeText}>Normal</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={!props.proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            props.setProMode(false)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.proMode}>
                                                <Text style={styles.proModeText}>Pro</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
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
        height: 130,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    frame: {
        top: 5,
        height: '100%',
        width: '98%',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderTopWidth: 0
    },
    background: {
        width: '100%',
        height: '100%',
    },
    frameContainer: {
        backgroundColor: 'rgba(60,5,0,0.7)'
    },
    namesContainer: {
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
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
        height: '55%',
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
        height: '15%',
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
        width: '20%', 
        justifyContent: 'center'
    },
    p1: {
        width: '40%'
    },
    p2: {
        textAlign: 'right'
    }
})
 
export default ScoreContainer