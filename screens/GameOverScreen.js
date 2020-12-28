import React, { useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, ImageBackground, View, Text, TouchableNativeFeedback, Animated} from 'react-native';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'

const GameOverScreen = ({proMode, p1Frames, p2Frames, p1Name, p2Name, statsP1, statsP2, successP1, successP2,
    breakP1, breakP2, frameRecord, navigation }) => {

    const endMatch = () => {
        navigation.navigate('Start')
    }

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.clothImage} source={cloth}>
                <ScrollView contentContainerStyle={styles.summaryContainer}>
                <Animated.View style={{borderWidth: 3}}>
                    <ImageBackground style={styles.woodImage} source={wood}>
                        <View style={styles.cover}>
                            <View style={styles.topContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>MATCH SUMMARY</Text></Text>
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
                            <View style={styles.framesTextContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>FRAMES</Text></Text>
                            </View>

                            <View style={styles.frameResultContainer}>
                                {frameRecord.map(x => <View key={x.key} style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <View style={{width: '40%'}}>
                                            <Text style={x.p2 < x.p1 ? styles.textBetter : styles.text}>{x.p1}</Text>
                                        </View>
                                        <View style={{width: '20%'}}>
                                            <Text style={styles.text}>{x.key}</Text>
                                        </View>
                                        <View style={{width: '40%'}}>
                                            <Text style={x.p2 > x.p1 ? styles.textBetter : styles.text}>{x.p2}</Text>
                                        </View>
                                    </View>
                                </View>)}
                            </View>
                            <View style={styles.buttonContainer}>
                                <View style={styles.newMatch}>
                                    <TouchableNativeFeedback
                                    onPress={() => {
                                        endMatch()
                                    }}
                                    background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                        <View style={styles.newMatchButton}>
                                            <Text style={styles.newMatchText}>NEW MATCH</Text>
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
    clothImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    woodImage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        },
    summaryContainer: {
        width: '80%',
        overflow: 'hidden',
        top: 100,
        borderRadius: 20,
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        padding: 20,
        width: '100%',
        overflow: 'hidden'
       },
    topContainer: {
        marginBottom: 10
    },
    framesTextContainer: {
        marginVertical: 10
    },
    matchResultContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
    },
    frameResultContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 15,
        paddingVertical: 5
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
        fontFamily: 'score',
        textAlign: 'center'
    },
    textBetter: {
        color: '#e0de94',
        fontFamily: 'score',
        textAlign: 'center'
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
    },
    textFrameResult: {
        color: '#fff',
        fontFamily: 'score',
        textAlign: 'center',
        fontSize: 30,
        width: 25
    },
    newMatch: {
        height: 60,
        width: 140,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.4)',
        marginBottom: 5
    },
    newMatchButton: {
        height: 60,
        width: 140,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMatchText: {
        color: '#000',
        fontFamily: 'scoreBold',
        fontSize: 18
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})


export default GameOverScreen