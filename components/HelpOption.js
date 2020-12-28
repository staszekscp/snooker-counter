import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image, Animated } from 'react-native';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'
 
const HelpOption = ({helpOptions, setHelpOptions, side, option}) => {

    const options = {
        start: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>How do I start a game?</Text>,
            text: <Text style={styles.explanationText}>In order to start the game you must type the players' names (2-20 characters) and tap the <Image style={{height: 30, width: 70}}source={require('../assets/help/start.png')} /> button. That's it! If you wish you may also change the game variant (15, 10 or 6 reds) or the counter mode. The <Image style={{height: 30, width: 50}} source={require('../assets/help/pro.png')} /> mode is a bit more complex allowing you to keep players' safety and long pot success statistics.</Text>,
            press: () => {
                setHelpOptions(prev => ({
                    ...prev,
                    start: !prev.start
                }))
            }},
        pot: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>I potted/missed a ball!</Text>,
            text: <Text style={styles.explanationText}>If you potted a ball just press the correct <Image style={{height: 30, width: 30}}source={require('../assets/help/redbll.png')} /> symbol on your side of the screen. The available options will change automatically. If you missed a ball press the <Image style={{height: 30, width: 70}}source={require('../assets/help/miss.png')} /> button instead.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                pot: !prev.pot
            }))
        }},
        safe: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>What are SAFE/UNSAFE buttons for?</Text>,
            text: <Text style={styles.explanationText}>If you want to keep the safety statistics you can do it! In the <Image style={{height: 30, width: 50}}source={require('../assets/help/pro.png')} /> Mode press the <Image style={{height: 30, width: 48}}source={require('../assets/help/safe.png')} /> or <Image style={{height: 30, width: 48}}source={require('../assets/help/unsafe.png')} /> button depending on the quality of the player's safety shot.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                safe: !prev.safe
            }))}},
        switchP: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>When do I use the SWITCH PLAYERS button?</Text>,
            text: <Text style={styles.explanationText}>Press it if you want to switch players - <Image style={{height: 30, width: 40}}source={require('../assets/help/switch.png')} /> button works in moreless the same way as if one would play a succesuful safety shot. But remember: if the player misses a shot tap the <Image style={{height: 30, width: 70}}source={require('../assets/help/miss.png')} /> button and if there was a foul use one of the foul buttons <Image style={{height: 28, width: 90}}source={require('../assets/help/fouls.png')} /> instead!</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                switchP: !prev.switchP
            }))}},
        foul: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>I commited a foul!</Text>,
            text: <Text style={styles.explanationText}>In case of a foul press one of the foul buttons: <Image style={{height: 28, width: 90}}source={require('../assets/help/fouls.png')} /> . These points will be added to the opponent's account.</Text>            ,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                foul: !prev.foul
            }))}},
        freeBall: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>Free ball was declared!</Text>,
            text: <Text style={styles.explanationText}>If after a foul the free ball was declared press the <Image style={{height: 30, width: 43}}source={require('../assets/help/freeballbuttonoff.png')} /> button. A colorful ball like this one: <Image style={{height: 30, width: 30}}source={require('../assets/Ball/freeball.png')} /> will show up. Press it if you potted the declared free ball. The free ball mode can be turned off by tapping on the <Image style={{height: 30, width: 43}}source={require('../assets/help/freeballbuttonon.png')} /> button once more.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                freeBall: !prev.freeBall
            }))}},
        redWentIn: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>I accidentally potted a red and committed a foul!</Text>,
            text: <Text style={styles.explanationText}>In this case press the <Image style={{height: 30, width: 48}}source={require('../assets/help/redwentin.png')} /> button to inform the counter that currently there is one red less on the table.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                redWentIn: !prev.redWentIn
            }))}},
        plusOneRed: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>I potted more than one red!</Text>,
            text: <Text style={styles.explanationText}>Use the <Image style={{height: 28, width: 48}}source={require('../assets/help/plusonered.png')} /> button in this case!</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                plusOneRed: !prev.plusOneRed
            }))}},
        longPot: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>How do I use the LONG button?</Text>,
            text: <Text style={styles.explanationText}>Press the <Image style={{height: 30, width: 45}}source={require('../assets/help/long.png')} /> button whenever a player attempts a long pot. The button will become darker <Image style={{height: 29, width: 42}}source={require('../assets/help/longon.png')} /> to inform you that the long pot mode is on. If the player pots or misses a ball with the long pot mode on the shot will be counted to the long pot statistics. The mode will turn off automatically.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                longPot: !prev.longPot
            }))}},
        undo: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>I tapped a wrong button! What do I have to do now?</Text>,
            text: <Text style={styles.explanationText}>During the game 5 previous shots will be kept in memory. That's why you may undo shots if you make a mistake! In order to do so press the <Image style={{height: 27, width: 46}}source={require('../assets/help/undo.png')} /> button (or <Image style={{height: 28, width: 45}}source={require('../assets/help/redo.png')} /> if you changed your mind!)</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                undo: !prev.undo
            }))}},
        reRack: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>We restart a frame. How can we inform the counter about it?</Text>,
            text: <Text style={styles.explanationText}>Just press the <Image style={{height: 28, width: 60}}source={require('../assets/help/rerack.png')} /> button to reset the progress of the frame!</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                reRack: !prev.reRack
            }))}},
        endOfFrame: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>When does a frame end?</Text>,
            text: <Text style={styles.explanationText}>Frames ends automatically in a couple of cases (for example after the full clearence or after a foul when there is only the black on the table). But a frame may end earlier too. If one of the players concedes press the <Image style={{height: 31, width: 74}}source={require('../assets/help/concede.png')} /> button. In another case if the winner doesn't want to pot the last black press the <Image style={{height: 27, width: 70}}source={require('../assets/help/endofframe.png')} /> button. </Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                endOfFrame: !prev.endOfFrame
            }))}},
        endOfMatch: {
            animationRef: useRef(new Animated.Value(0)).current,
            header: <Text style={styles.headerText}>What do we do when a frame has ended?</Text>,
            text: <Text style={styles.explanationText}>After each frame you may start the next one by pressing the <Image style={{height: 30, width: 70}}source={require('../assets/help/nextframe.png')} /> button. However if you decided to end the whole match press the <Image style={{height: 30, width: 75}}source={require('../assets/help/endgame.png')} /> button instead.</Text>,
            press: () => {setHelpOptions(prev => ({
                ...prev,
                endOfMatch: !prev.endOfMatch
            }))}}
    }
    
    const animation = (anim, val) => {
        Animated.timing(anim, {
            toValue: val,
            duration: 800,
            useNativeDriver: true
        }).start()
    }

    return (        <View style={side === "right" ? styles.summaryContainerR : styles.summaryContainer}>
                        <ImageBackground style={styles.img} source={wood}>
                            <TouchableNativeFeedback
                            onPress={() => {
                                options[option].press()
                                animation(options[option].animationRef, 1)}}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        {options[option].header}
                                    </View>
                                </View>
                                <Animated.View style={helpOptions[option] ? [styles.explanationContainer, {opacity: options[option].animationRef}] : {display: 'none'}}>
                                {options[option].text}
                                </Animated.View>
                            </View>
                            </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryContainer: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        marginLeft: '16%',
        marginRight: '4%',
        borderWidth: 3
    },
    summaryContainerR: {
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        marginHorizontal: '4%',
        borderWidth: 3
    },
    topContainer: {
        width: '100%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        marginBottom: 30,
        borderWidth: 3,
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        width: '100%',
        padding: 20
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
    headerText: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 16
    },
    helpOptionHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 50
    },
})

export default HelpOption