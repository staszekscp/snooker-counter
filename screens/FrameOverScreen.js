import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback, ImageBackground, View, Text, ScrollView} from 'react-native';

const FrameOverScreen = props => {
    const proMode = props.proMode

    const p1frames = props.p1Frames
    const p2frames = props.p2Frames

    const p1 = props.p1Name
    const p2 = props.p2Name

    const p1points = props.statsP1.points
    const p2points = props.statsP2.points

    const p1ballsPotted = props.statsP1.pots
    const p2ballsPotted = props.statsP2.pots

    const p1potSuccess = props.successP1.potSuccess
    const p2potSuccess = props.successP2.potSuccess

    const p1longPotSuccess = props.successP1.longPotSuccess
    const p2longPotSuccess = props.successP2.longPotSuccess

    const p1safetySuccess = props.successP1.safetySuccess
    const p2safetySuccess = props.successP2.safetySuccess

    const p1break = props.breakP1
    const p2break = props.breakP2



    return (
        <View style={styles.main}>
            <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
            <ScrollView contentContainerStyle={styles.summaryContainer}>
                <View>
                    <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.top}>
                                <Text style={styles.textWinner}><Text style={{color: '#e0de94'}}>MATCH STATS</Text></Text>
                            </View>
                            <View style={styles.topResult}>
                                <View><Text style={p1frames > p2frames ? [styles.textResult, {color: '#e0de94'}] : styles.textResult}>{p1.toUpperCase()}</Text></View>
                                <View>
                                    <Text>
                                        <Text style={p1frames > p2frames ? [styles.textScore, {color: '#e0de94'}] : styles.textScore} >{p1frames}</Text> 
                                        <Text style={styles.textScore}> : </Text> 
                                        <Text style={p1frames < p2frames ? [styles.textScore, {color: '#e0de94'}] : styles.textScore}>{p2frames}</Text>
                                    </Text>
                                </View>
                                <View><Text style={p1frames < p2frames ? [styles.textResult, {color: '#e0de94'}] : styles.textResult}>{p2.toUpperCase()}</Text></View>
                            </View>
                            <View style={styles.statsContainer}>
                                <View style={styles.p1Stats}>
                                    <View><Text style={p1points > p2points? styles.textBetter : styles.text}>{p1points}</Text></View>
                                    <View><Text style={p1ballsPotted > p2ballsPotted ? styles.textBetter : styles.text}>{p1ballsPotted}</Text></View>
                                    <View><Text style={p1potSuccess > p2potSuccess? styles.textBetter : styles.text}>{Math.round(p1potSuccess)}%</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : p1longPotSuccess > p2longPotSuccess? styles.textBetter : styles.text}>{Math.round(p1longPotSuccess)}%</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : p1safetySuccess > p2safetySuccess? styles.textBetter : styles.text}>{Math.round(p1safetySuccess)}%</Text></View>
                                    <View><Text style={p1break > p2break ? styles.textBetter : styles.text}>{p1break}</Text></View>
                                </View>
                                <View style={styles.stats}>
                                    <View><Text style={styles.text}>TOTAL POINTS</Text></View>
                                    <View><Text style={styles.text}>BALLS POTTED</Text></View>
                                    <View><Text style={styles.text}>POT SUCCESS</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : styles.text}>LONG POT SUCCESS</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : styles.text}>SAFETY SUCCESS</Text></View>
                                    <View><Text style={styles.text}>HIGHEST BREAK</Text></View>
                                </View>
                                <View style={styles.p2Stats}>
                                    <View><Text style={p1points < p2points? styles.textBetter : styles.text}>{p2points}</Text></View>
                                    <View><Text style={p1ballsPotted < p2ballsPotted? styles.textBetter : styles.text}>{p2ballsPotted}</Text></View>
                                    <View><Text style={p1potSuccess < p2potSuccess? styles.textBetter : styles.text}>{Math.round(p2potSuccess)}%</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : p1longPotSuccess < p2longPotSuccess? styles.textBetter : styles.text}>{Math.round(p2longPotSuccess)}%</Text></View>
                                    <View><Text style={proMode ? {display: 'none'} : p1safetySuccess < p2safetySuccess? styles.textBetter : styles.text}>{Math.round(p2safetySuccess)}%</Text></View>
                                    <View><Text style={p1break < p2break? styles.textBetter : styles.text}>{p2break}</Text></View>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                            <View style={styles.nextFrame}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    props.setFrameRecord(prev => ([
                                        ...prev,
                                        {p1: props.p1Points,
                                        p2: props.p2Points,
                                        id: props.p1Frames+props.p2Frames}
                                    ]))
                                    props.setEndOfFrame(false)
                                    props.setP1Points(0)
                                    props.setP2Points(0)
                                    props.setRemaining(props.mode * 8 + 27)
                                    props.setOverlayP1(false)
                                    props.setOverlayP2(false)
                                    props.setCurrentBreakP1(0)
                                    props.setCurrentBreakP2(0)
                                    props.setActiveBallsP1({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true
                                    })
                                    props.setActiveBallsP2({
                                        '1': false,
                                        '2': true,
                                        '3': true,
                                        '4': true,
                                        '5': true,
                                        '6': true,
                                        '7': true
                                    })
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
                                    props.setFrameRecord(prev => ([
                                        ...prev,
                                        {p1: props.p1Points,
                                        p2: props.p2Points,
                                        id: props.p1Frames+props.p2Frames}
                                    ]))
                                    props.setRemaining(props.mode * 8 + 27)
                                    props.setEndOfFrame(false)
                                    props.setGameOver(true)
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
                </View>
            </ScrollView>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        
    },
    img: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    img2: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    summaryContainer: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 30,
        borderWidth: 3,
        top:100
    },
    summaryContainer2: {
        height: '20%',
        width: '40%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        width: '100%',
        padding: 20
       },
    cover2: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
       },
    top: {
        marginBottom: 10
    },
    topResult: {

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
    stats: {
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
        color: 'white',
        fontFamily: 'score'
    },
    textBetter: {
        color: '#e0de94',
        fontFamily: 'score'
    },
    textResult: {
        color: 'white',
        fontFamily: 'score',
        fontSize: 16,
        width: 100,
        textAlign: 'center'
    },
    textWinner: {
        color: 'white',
        fontFamily: 'score',
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 30
    },
    textScore: {
        color: 'white',
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
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextFrameText: {
        color: 'black',
        fontFamily: 'scoreBold',
        fontSize: 18
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