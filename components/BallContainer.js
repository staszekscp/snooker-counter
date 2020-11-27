import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

import Ball from '../components/Ball'
 
const BallContainer = props => {
    const playerOne = 'p1'
    const playerTwo = 'p2'

    return (
        <View style={styles.main}>
            <View style={styles.mainStats}>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={props.activeBallsP1['2'] ? {...styles.ball, ...styles.yellow, ...styles.grey} : {...styles.ball, ...styles.yellow}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={2} 
                            p={props.p1} 
                            pPoints={props.p1Points} 
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}
                            />
                        <Ball 
                            style={props.activeBallsP1['3'] ? {...styles.ball, ...styles.green, ...styles.grey} : {...styles.ball, ...styles.green}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={3} 
                            p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP1['4'] ? {...styles.ball, ...styles.brown, ...styles.grey} : {...styles.ball, ...styles.brown}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={4} p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                        <View style={props.proMode ? {opacity: 0} : props.longPotP1 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                props.setLongPotP1(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={props.longPotP1 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={props.activeBallsP1['1'] ? {...styles.ball, ...styles.red, ...styles.grey} : {...styles.ball, ...styles.red}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={1} 
                            p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            fb={props.fbP1}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}  
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <View style={props.freeBallP1 ? {...styles.touchableFB, ...styles.grey} : styles.touchableFB}>
                            <TouchableNativeFeedback
                                disabled={props.freeBallP1}
                                onPress={() => {
                                    props.setFreeBallP1(prev => !prev)
                                    props.setOverlayP2(!props.fbP1)
                                    props.activateP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={props.activeBallsP1['5'] ? {...styles.ball, ...styles.blue, ...styles.grey} : {...styles.ball, ...styles.blue}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={5} 
                            p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP1['6'] ? {...styles.ball, ...styles.pink, ...styles.grey} : {...styles.ball, ...styles.pink}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={6} 
                            p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP1['7'] ? {...styles.ball, ...styles.black, ...styles.grey} : {...styles.ball, ...styles.black}} 
                            activate={props.activateP1} 
                            activateOpp={props.activateP2}
                            activeBalls={props.activeBallsP1}
                            val={7} 
                            p={props.p1} 
                            pPoints={props.p1Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerOne}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP1}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP1}
                            setLongPot={props.setLongPotP1}
                            longPot={props.longPotP1}
                            setCurrentBreak={props.setCurrentBreakP1}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                    </View>
                </View>
                <View style={styles.mainBallContainer}> 
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={props.activeBallsP2['2'] ? {...styles.ball, ...styles.yellow, ...styles.grey} : {...styles.ball, ...styles.yellow}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={2} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP2['3'] ? {...styles.ball, ...styles.green, ...styles.grey} : {...styles.ball, ...styles.green}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={3} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP2['4'] ? {...styles.ball, ...styles.brown, ...styles.grey} : {...styles.ball, ...styles.brown}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={4} p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                    </View>
                    <View style={{...styles.ballContainer, ...styles.centralContainer}}>
                    <View style={props.freeBallP2 ? {...styles.touchableFB, ...styles.grey} : styles.touchableFB}>
                            <TouchableNativeFeedback
                                disabled={props.freeBallP2}
                                onPress={() => {
                                    props.setFreeBallP2(prev => !prev)
                                    props.setOverlayP1(!props.fbP2)
                                    props.activateP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true})
                                }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonFB}>
                                    <Text style={styles.buttonText}>
                                        FREE BALL
                                    </Text >
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Ball 
                            style={props.activeBallsP2['1'] ? {...styles.ball, ...styles.red, ...styles.grey} : {...styles.ball, ...styles.red}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={1} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            fb={props.fbP2}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2} 
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <View style={props.proMode ? {opacity: 0} : props.longPotP2 ? styles.touchableLongPressed : styles.touchableLong}>
                            <TouchableNativeFeedback
                            onPress={()=>{
                                props.setLongPotP2(prev => !prev)
                            }}
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                <View style={styles.buttonLong}>
                                    <Text style={props.longPotP2 ? styles.buttonTextLongPressed : styles.buttonText} >
                                        LONG
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        
                    </View>
                    <View style={{...styles.ballContainer, ...styles.borderContainer}}>
                        <Ball 
                            style={props.activeBallsP2['5'] ? {...styles.ball, ...styles.blue, ...styles.grey} : {...styles.ball, ...styles.blue}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={5} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}
                            />
                        <Ball 
                            style={props.activeBallsP2['6'] ? {...styles.ball, ...styles.pink, ...styles.grey} : {...styles.ball, ...styles.pink}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={6} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                        <Ball 
                            style={props.activeBallsP2['7'] ? {...styles.ball, ...styles.black, ...styles.grey} : {...styles.ball, ...styles.black}} 
                            activate={props.activateP2} 
                            activateOpp={props.activateP1}
                            activeBalls={props.activeBallsP2}
                            val={7} 
                            p={props.p2} 
                            pPoints={props.p2Points}
                            setOverlayP1={props.setOverlayP1}
                            setOverlayP2={props.setOverlayP2}
                            player={playerTwo}
                            remaining={props.remaining}
                            setRemaining={props.setRemaining}
                            setFreeBall={props.setFreeBallP2}
                            setFreeBP1={props.setFreeBP1} 
                            setFreeBP2={props.setFreeBP2}
                            stats={props.statsP2}
                            setLongPot={props.setLongPotP2}
                            longPot={props.longPotP2}
                            setCurrentBreak={props.setCurrentBreakP2}
                            backMode={props.backMode}
                            setBackMode={props.setBackMode}
                            setBack={props.setBack}
                            modifyArray={props.modifyArray}/>
                    </View>
                </View>
            </View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {

    },
    mainStats: {
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
        backgroundColor: 'lightblue',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
    },
    touchableLong: {
        height: 30,
        width: 45,
        borderRadius: 5,
        backgroundColor: 'lightgreen',
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
        backgroundColor: 'darkgreen',
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
        color: 'black'
    },
    buttonTextLongPressed: {
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'scoreBold',
        color: 'white'
    },
    ball: {
        height: 49,
        width: 49,
        borderRadius: 24.5,
        margin: 5
    },
    red: {
        backgroundColor: 'red',
        margin: 10
    },
    yellow: {
        backgroundColor: 'yellow',
        top: 30
    },
    green: {
        backgroundColor: 'green',
    },
    brown: {
        backgroundColor: 'brown',
        top: 30
    },
    blue: {
        backgroundColor: 'blue',
    },
    pink: {
        backgroundColor: 'pink',
        top: 30
    },
    black: {
        backgroundColor: '#333',
    },
    grey: {
        opacity: 0
    }
})
 
export default BallContainer