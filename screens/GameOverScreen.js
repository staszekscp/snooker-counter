import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, View, Text, TouchableNativeFeedback} from 'react-native';

const GameOverScreen = props => {

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.clothImage} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
                <ScrollView contentContainerStyle={styles.summaryContainer}>
                <View >
                    <ImageBackground style={styles.woodImage} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.topContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>MATCH SUMMARY</Text></Text>
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
                                <View><Text style={props.p1Frames < props.p2Frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{props.p1Name.toUpperCase()}</Text></View>
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
                            <View style={styles.framesTextContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>FRAMES</Text></Text>
                            </View>

                            <View style={styles.frameResultContainer}>
                                {props.frameRecord.map(x => <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <View style={{width: '40%'}}>
                                            <Text style={x.p2 < x.p1 ? styles.textBetter : styles.text}>{x.p1}</Text>
                                        </View>
                                        <View style={{width: '20%'}}>
                                            <Text style={styles.text}>{x.id}</Text>
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
                                        props.navigation.navigate('Start')
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
        alignItems: 'center',
        overflow: 'hidden',
        },
    summaryContainer: {
        width: '80%',
        overflow: 'hidden',
        top: 100,
        borderWidth: 3,
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