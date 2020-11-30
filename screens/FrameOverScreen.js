import React from 'react';
import { StyleSheet, TouchableNativeFeedback, ImageBackground, View, Text, ScrollView} from 'react-native';

const FrameOverScreen = props => {

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.clothImage} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
            <ScrollView contentContainerStyle={styles.summaryContainer}>
                <View>
                    <ImageBackground style={styles.woodImage} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.topContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>MATCH STATS</Text></Text>
                            </View>
                            <View style={styles.matchResultContainer}>
                                <View><Text style={props.p1Frames > props.p2Frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{props.p1Name.toUpperCase()}</Text></View>
                                <View>
                                    <Text>
                                        <Text style={props.p1Frames > props.p2Frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult} >{props.p1Frames}</Text> 
                                        <Text style={styles.textFrameResult}> : </Text> 
                                        <Text style={props.p1Frames < props.p2Frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult}>{props.p2Frames}</Text>
                                    </Text>
                                </View>
                                <View><Text style={props.p1Frames < props.p2Frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{props.p2Name.toUpperCase()}</Text></View>
                            </View>
                            <View style={styles.statsContainer}>
                                <View style={styles.p1Stats}>
                                    <View><Text style={props.statsP1.points > props.statsP2.points? styles.textBetter : styles.text}>{props.statsP1.points}</Text></View>
                                    <View><Text style={props.statsP1.pots > props.statsP2.pots ? styles.textBetter : styles.text}>{props.statsP1.pots}</Text></View>
                                    <View><Text style={props.successP1.potSuccess > props.successP2.potSuccess? styles.textBetter : styles.text}>{Math.round(props.successP1.potSuccess)}%</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : props.successP1.longPotSuccess > props.successP2.longPotSuccess? styles.textBetter : styles.text}>{Math.round(props.successP1.longPotSuccess)}%</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : props.successP1.safetySuccess > props.successP2.safetySuccess? styles.textBetter : styles.text}>{Math.round(props.successP1.safetySuccess)}%</Text></View>
                                    <View><Text style={props.breakP1 > props.breakP2 ? styles.textBetter : styles.text}>{props.breakP1}</Text></View>
                                </View>
                                <View style={styles.statNames}>
                                    <View><Text style={styles.text}>TOTAL POINTS</Text></View>
                                    <View><Text style={styles.text}>BALLS POTTED</Text></View>
                                    <View><Text style={styles.text}>POT SUCCESS</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : styles.text}>LONG POT SUCCESS</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : styles.text}>SAFETY SUCCESS</Text></View>
                                    <View><Text style={styles.text}>HIGHEST BREAK</Text></View>
                                </View>
                                <View style={styles.p2Stats}>
                                    <View><Text style={props.statsP1.points < props.statsP2.points? styles.textBetter : styles.text}>{props.statsP2.points}</Text></View>
                                    <View><Text style={props.statsP1.pots < props.statsP2.pots? styles.textBetter : styles.text}>{props.statsP2.pots}</Text></View>
                                    <View><Text style={props.successP1.potSuccess < props.successP2.potSuccess? styles.textBetter : styles.text}>{Math.round(props.successP2.potSuccess)}%</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : props.successP1.longPotSuccess < props.successP2.longPotSuccess? styles.textBetter : styles.text}>{Math.round(props.successP2.longPotSuccess)}%</Text></View>
                                    <View><Text style={!props.proMode ? {display: 'none'} : props.successP1.safetySuccess < props.successP2.safetySuccess? styles.textBetter : styles.text}>{Math.round(props.successP2.safetySuccess)}%</Text></View>
                                    <View><Text style={props.breakP1 < props.breakP2? styles.textBetter : styles.text}>{props.breakP2}</Text></View>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                            <View style={styles.nextFrame}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    if (props.backwardMode) {
                                        props.setBackwardMode(false)
                                    }
                                    props.setPreviousShots([])
                                    props.setCurrentShotIndex(0)
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
                                    props.activateBallsP1(1)
                                    props.activateBallsP2(1)
                                    props.setLongPotP1(false)
                                    props.setLongPotP2(false)
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
                                    if (props.backwardMode) {
                                        props.setBackwardMode(false)
                                    }
                                    props.setPreviousShots([])
                                    props.setCurrentShotIndex(0)
                                    props.setFrameRecord(prev => ([
                                        ...prev,
                                        {p1: props.p1Points,
                                        p2: props.p2Points,
                                        id: props.p1Frames+props.p2Frames}
                                    ]))
                                    props.setRemaining(props.mode * 8 + 27)
                                    props.setEndOfFrame(false)
                                    props.setEndOfMatch(true)
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
        borderWidth: 3,
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
        color: 'white',
        fontFamily: 'score'
    },
    textBetter: {
        color: '#e0de94',
        fontFamily: 'score'
    },
    textPlayerName: {
        color: 'white',
        fontFamily: 'score',
        fontSize: 16,
        width: 100,
        textAlign: 'center'
    },
    textMainHeader: {
        color: 'white',
        fontFamily: 'score',
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 30
    },
    textFrameResult: {
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
    nextFrameText: {
        color: 'black',
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
        borderColor: 'black',
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