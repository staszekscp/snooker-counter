import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, View, Text, TouchableNativeFeedback} from 'react-native';

const GameOverScreen = props => {
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
            <ImageBackground style={styles.clothImage} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
                <ScrollView contentContainerStyle={styles.summaryContainer}>
                <View >
                    <ImageBackground style={styles.woodImage} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.topContainer}>
                                <Text style={styles.textMainHeader}><Text style={{color: '#e0de94'}}>MATCH SUMMARY</Text></Text>
                            </View>
                            <View style={styles.matchResultContainer}>
                                <View><Text style={p1frames > p2frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{p1.toUpperCase()}</Text></View>
                                <View>
                                    <Text>
                                        <Text style={p1frames > p2frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult} >{p1frames}</Text> 
                                        <Text style={styles.textFrameResult}> : </Text> 
                                        <Text style={p1frames < p2frames ? [styles.textFrameResult, {color: '#e0de94'}] : styles.textFrameResult}>{p2frames}</Text>
                                    </Text>
                                </View>
                                <View><Text style={p1frames < p2frames ? [styles.textPlayerName, {color: '#e0de94'}] : styles.textPlayerName}>{p2.toUpperCase()}</Text></View>
                            </View>
                            <View style={styles.statsContainer}>
                                <View style={styles.p1Stats}>
                                    <View><Text style={p1points > p2points? styles.textBetter : styles.text}>{p1points}</Text></View>
                                    <View><Text style={p1ballsPotted > p2ballsPotted ? styles.textBetter : styles.text}>{p1ballsPotted}</Text></View>
                                    <View><Text style={p1potSuccess > p2potSuccess? styles.textBetter : styles.text}>{Math.round(p1potSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : p1longPotSuccess > p2longPotSuccess? styles.textBetter : styles.text}>{Math.round(p1longPotSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : p1safetySuccess > p2safetySuccess? styles.textBetter : styles.text}>{Math.round(p1safetySuccess)}%</Text></View>
                                    <View><Text style={p1break > p2break ? styles.textBetter : styles.text}>{p1break}</Text></View>
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
                                    <View><Text style={p1points < p2points? styles.textBetter : styles.text}>{p2points}</Text></View>
                                    <View><Text style={p1ballsPotted < p2ballsPotted? styles.textBetter : styles.text}>{p2ballsPotted}</Text></View>
                                    <View><Text style={p1potSuccess < p2potSuccess? styles.textBetter : styles.text}>{Math.round(p2potSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : p1longPotSuccess < p2longPotSuccess? styles.textBetter : styles.text}>{Math.round(p2longPotSuccess)}%</Text></View>
                                    <View><Text style={!proMode ? {display: 'none'} : p1safetySuccess < p2safetySuccess? styles.textBetter : styles.text}>{Math.round(p2safetySuccess)}%</Text></View>
                                    <View><Text style={p1break < p2break? styles.textBetter : styles.text}>{p2break}</Text></View>
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
        color: 'white',
        fontFamily: 'score',
        textAlign: 'center'
    },
    textBetter: {
        color: '#e0de94',
        fontFamily: 'score',
        textAlign: 'center'
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
    },
    textFrameResult: {
        color: 'white',
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
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMatchText: {
        color: 'black',
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