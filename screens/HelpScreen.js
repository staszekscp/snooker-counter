import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'
 
const HelpScreen = props => {

    const [helpOptions, setHelpOptions] = useState({
        start: false,
        pot: false,
        safe: false,
        switch: false,
        foul: false,
        freeBall: false,
        redWentIn: false,
        plusOneRed: false,
        longPot: false,
        undo: false,
        reRack: false,
        endOfFrame: false,
        endOfMatch: false
    })
    const turnAround = useRef(new Animated.Value(0)).current
    const start = useRef(new Animated.Value(0)).current
    const pot = useRef(new Animated.Value(0)).current
    const safe = useRef(new Animated.Value(0)).current
    const switchP = useRef(new Animated.Value(0)).current
    const foul = useRef(new Animated.Value(0)).current
    const freeBall = useRef(new Animated.Value(0)).current
    const redWentIn = useRef(new Animated.Value(0)).current
    const plusOneRed = useRef(new Animated.Value(0)).current
    const longPot = useRef(new Animated.Value(0)).current
    const undo = useRef(new Animated.Value(0)).current
    const reRack = useRef(new Animated.Value(0)).current
    const endOfFrame = useRef(new Animated.Value(0)).current
    const endOfMatch = useRef(new Animated.Value(0)).current

    const animation = (anim, val) => {
        Animated.timing(anim, {
            toValue: val,
            duration: 800,
            useNativeDriver: true
        }).start()
    }

    return (
    <View style={styles.main}>
        <ImageBackground style={styles.img} source={cloth}>
            <ScrollView style={{width: '90%'}} contentContainerStyle={{width: '100%'}}>
                <View style={{justifyContent: 'center'}}>
                    <View style={[styles.summaryContainer, {marginTop: 70}]}>
                        <ImageBackground style={styles.img2} source={wood}>
                            <TouchableNativeFeedback
                            onPress={() => {
                                setHelpOptions(prev => ({
                                    ...prev,
                                    start: !prev.start
                                }))
                                animation(start, 1)
                            }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>START</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.start ? [styles.explanationContainer, {opacity: start}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>In order to start the game you must type the players' names (2-20 characters) and tap the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 70}}source={require('../assets/help/start.png')} /></Text> button. That's it! If you wish you may also change the game variant (15, 10 or 6 reds) or the counter mode. The <Text style={{fontSize: 20}}><Image style={{height: 30, width: 50}} source={require('../assets/help/pro.png')} /></Text> mode is a bit more complex allowing you to keep players' safety and long pot success statistics.</Text>
                                </Animated.View>
                            </View>
                            </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                pot: !prev.pot
                            }))
                            animation(pot, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>POT/MISS</Text>
                                    </View>
                                    <View>

                                    </View>
                                </View>
                                <Animated.View style={helpOptions.pot ? [styles.explanationContainer, {opacity: pot}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>When a ball was potted just press the correct <Text style={{fontSize: 20}}><Image style={{height: 30, width: 30}}source={require('../assets/help/redbll.png')} /></Text> symbol on the potting player's side of the screen. The available options will change automatically. If a player missed a ball press the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 70}}source={require('../assets/help/miss.png')} /></Text> button instead.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                safe: !prev.safe
                            }))
                            animation(safe, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SAFE/UNSAFE</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 40, width: 60}}source={require('../assets/help/pro.png')} />
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.safe ? [styles.explanationContainer, {opacity: safe}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>If you want to keep the safety statistics you can do it! In the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 50}}source={require('../assets/help/pro.png')} /></Text> Mode press the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 48}}source={require('../assets/help/safe.png')} /></Text> or <Text style={{fontSize: 20}}><Image style={{height: 30, width: 48}}source={require('../assets/help/unsafe.png')} /></Text> button depending on the quality of the player's safety shot.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                switch: !prev.switch
                            }))
                            animation(switchP, 1)
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SWITCH PLAYERS</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.switch ? [styles.explanationContainer, {opacity: switchP}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Press it if you want to switch players - <Text style={{fontSize: 20}}><Image style={{height: 30, width: 40}}source={require('../assets/help/switch.png')} /></Text> button works in moreless the same way as if one would play a succesuful safety shot. But remember: if the player misses a shot tap the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 70}}source={require('../assets/help/miss.png')} /></Text> button and if there was a foul use one of the foul buttons <Text style={{fontSize: 20}}><Image style={{height: 28, width: 90}}source={require('../assets/help/fouls.png')} /></Text> instead!</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                foul: !prev.foul
                            }))
                            animation(foul, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FOUL</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.foul ? [styles.explanationContainer, {opacity: foul}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>In case of a foul press one of the foul buttons: <Text style={{fontSize: 20}}><Image style={{height: 28, width: 90}}source={require('../assets/help/fouls.png')} /></Text> . These points will be added to the opponent's account.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                freeBall: !prev.freeBall
                            }))
                            animation(freeBall, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FREE BALL</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.freeBall ? [styles.explanationContainer, {opacity: freeBall}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>If after a foul the free ball was declared press the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 43}}source={require('../assets/help/freeballbuttonoff.png')} /></Text> button. A colorful ball <Text style={{fontSize: 20}}><Image style={{height: 30, width: 30}}source={require('../assets/Ball/freeball.png')} /></Text> will show up. Press it if the player potted the declared free ball. The free ball mode can be turned off by tapping on the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 43}}source={require('../assets/help/freeballbuttonon.png')} /></Text> button once more.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                redWentIn: !prev.redWentIn
                            }))
                            animation(redWentIn, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RED WENT IN</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.redWentIn ? [styles.explanationContainer, {opacity: redWentIn}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>If one of the players committed a foul and potted a red at the same time press the <Text style={{fontSize: 20}}><Image style={{height: 30, width: 48}}source={require('../assets/help/redwentin.png')} /></Text> button to inform the counter that currently there is one red less on the table.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                plusOneRed: !prev.plusOneRed
                            }))
                            animation(plusOneRed, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>+1 RED</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.plusOneRed ? [styles.explanationContainer, {opacity: plusOneRed}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Use the <Text style={{fontSize: 20}}><Image style={{height: 28, width: 48}}source={require('../assets/help/plusonered.png')} /></Text> button whenever a player potted more than one red at the same time!</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                longPot: !prev.longPot
                            }))
                            animation(longPot, 1)
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>LONG POT</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 40, width: 60}}source={require('../assets/help/pro.png')} />
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.longPot ? [styles.explanationContainer, {opacity: longPot}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Press the <Image style={{height: 30, width: 45}}source={require('../assets/help/long.png')} /> button whenever a player attempts a long pot. The button will become darker <Image style={{height: 29, width: 42}}source={require('../assets/help/longon.png')} /> to inform you that the long pot mode is on. If the player pots or misses a ball with the long pot mode on the shot will be counted to the long pot statistics. The mode will turn off automatically.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                undo: !prev.undo
                            }))
                            animation(undo, 1)
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>UNDO/REDO</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.undo ? [styles.explanationContainer, {opacity: undo}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>During the game 5 previous shots will be kept in memory. That's why you may undo shots if you made a mistake! In order to do so press the <Image style={{height: 27, width: 46}}source={require('../assets/help/undo.png')} /> button (or <Image style={{height: 28, width: 45}}source={require('../assets/help/redo.png')} /> if you changed your mind!)</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                reRack: !prev.reRack
                            }))
                            animation(reRack, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RE-RACK</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.reRack ? [styles.explanationContainer, {opacity: reRack}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>The frame will restart? Just press the <Image style={{height: 28, width: 60}}source={require('../assets/help/rerack.png')} /> button to reset the progress of the frame!</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainerR}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                endOfFrame: !prev.endOfFrame
                            }))
                            animation(endOfFrame, 1)
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF FRAME</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.endOfFrame ? [styles.explanationContainer, {opacity: endOfFrame}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Frames ends automatically in a couple of cases (for example after the full clearence or after a foul when there is only the black on the table). But a frame may end earlier too. If one of the players concedes press the <Image style={{height: 31, width: 74}}source={require('../assets/help/concede.png')} /> button. In another case if the winner doesn't want to pot the last black press the <Image style={{height: 27, width: 70}}source={require('../assets/help/endofframe.png')} /> button. </Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                        <TouchableNativeFeedback
                        onPress={() => {
                            setHelpOptions(prev => ({
                                ...prev,
                                endOfMatch: !prev.endOfMatch
                            }))
                            animation(endOfMatch, 1)
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF MATCH</Text>
                                    </View>
                                    <View>
                                        
                                    </View>
                                </View>
                                <Animated.View style={helpOptions.endOfMatch ? [styles.explanationContainer, {opacity: endOfMatch}] : {display: 'none'}}>
                                    <Text style={styles.explanationText}>After each frame you may start the next one by pressing the <Image style={{height: 30, width: 70}}source={require('../assets/help/nextframe.png')} /> button. However if you decided to end the whole match press the <Image style={{height: 30, width: 75}}source={require('../assets/help/endgame.png')} /> button instead.</Text>
                                </Animated.View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    </View>
    )
}

HelpScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    img: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        },
    img2: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryContainer: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        marginLeft: '20%',
        borderWidth: 3
    },
    summaryContainerR: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 3
    },
    summaryContainerError: {
        height: '30%',
        width: '60%',
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
    coverError: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        height: '65%',
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingVertical: 10,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessageTextHeader: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        fontSize: 20
    },
    errorMessageText: {
        color: '#ddd',
        fontFamily: 'scoreBold',
        fontSize: 16,
        textAlign: 'justify',
        padding: 10
    },
    name: {
        height: '15%'
    },
    topHeader: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 26
    },
    explanationContainer: {
        width: '98%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    explanationText: {
        color: '#fff',
        fontFamily: 'score',
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 22
    },



    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 5,
        width: 200,
        color: '#ddd',
        fontFamily: 'score'
    },


    redButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    redButtonContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden'
    },
    redButtonOn: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redButtonOff: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.4
    },
    reds15: {
        top: 2,
        height: 37,
        width: 40
    },
    reds10: {
        height: 32,
        width: 36
    },
    reds6: {
        height: 28,
        width: 30
    },
    headerText: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 26
    },
    helpOptionHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    proModeButtonOff: {
        height: 45,
        width: 75,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        opacity: 0.4,
        marginHorizontal: 10
    },
    proModeButtonOn: {
        height: 45,
        width: 75,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        marginHorizontal: 10
    },
    proMode: {
        height: 45,
        width: 75,
        borderRadius: 22.5,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    proModeText: {
        fontFamily: 'score',
        fontSize: 16,
        textAlign: 'center',
        color: '#ddd'
    },
    proModeContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        paddingVertical: 10
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
        color: '#ddd',
        fontFamily: 'scoreBold',
        fontSize: 22
    },
    endMatchText: {
        color: '#bbb',
        fontFamily: 'score',
        fontSize: 14
    }
})

export default HelpScreen