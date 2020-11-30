import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image } from 'react-native';
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

    return (
    <View style={styles.main}>
        <ImageBackground style={styles.img} source={cloth}>
            <ScrollView style={{width: '85%'}} contentContainerStyle={{width: '100%'}}>
                <View style={{justifyContent: 'center'}}>
                    <View style={[styles.summaryContainer, {marginTop: 70}]}>
                        <ImageBackground style={styles.img2} source={wood}>
                            <TouchableNativeFeedback
                            onPress={() => {
                                setHelpOptions(prev => ({
                                    ...prev,
                                    start: !prev.start
                                }))
                            }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>START</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.start ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>In order to start the game you must type the players' names (2-20 characters). That's it! If you wish you may also change the game variant (15, 10 or 6 reds) or the counter mode. The Pro mode is a bit more complex allowing you to keep players' safety and long pot success statistics.</Text>
                                </View>
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
                                pot: !prev.pot
                            }))
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>POT/MISS</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.pot ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>When a ball was potted just press the correct ball symbol on the potting player's side of the screen. The available options will change automatically. If a player missed a ball press the MISS button instead.</Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SAFE/UNSAFE</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.safe ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>If you want to keep the safety statistics you can do it! In the Pro Mode press the safe or unsafe button depending on the quality of the player's safety shot.</Text>
                                </View>
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
                                switch: !prev.switch
                            }))
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SWITCH PLAYERS</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.switch ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Press it if you want to switch players - this button works in moreless the same way as if one would play a succesuful safety shot. If the player misses a shot press the MISS button and if there was a foul use one of the FOUL buttons instead!</Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FOUL</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.foul ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>In case of a foul choose the number of points the opponent gains. For example if the player on the left side of the screen committed a foul for 5 points press the number 5 on the left side of the screen. The 5 points will be added to the account of the player on the right.</Text>
                                </View>
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
                                freeBall: !prev.freeBall
                            }))
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FREE BALL</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.freeBall ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>After each foul the FREE BALL button will show up. Of course not after every foul there will be a free ball but sometimes it will happen. This is the moment when you can press the FREE BALL button (you can press it again to switch it off). A colorful ball image will show up. Press it only if the player pots the free ball.</Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RED WENT IN</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.redWentIn ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>If someone committed a foul and potted a red at the same time press the RED WENT IN button to inform the counter that currently there is one red less on the table. Or more than just one!</Text>
                                </View>
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
                                plusOneRed: !prev.plusOneRed
                            }))
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>+1 RED</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.plusOneRed ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Use it if a player potted more than one red at once without a foul!</Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>LONG POT</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.longPot ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>Press it when a player attempts a long pot. The long pot mode will be turned on. If the ball was potted press the correct ball image. In the case of a miss press the MISS button. The long pot mode will turn off automatically.</Text>
                                </View>
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
                                undo: !prev.undo
                            }))
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>UNDO/REDO</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.undo ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>During the game 5 previous shots will be kept in memory. That's why you may undo shots if you made a mistake! In order to do so press the UNDO button (or REDO if you changed your mind!)</Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RE-RACK</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.reRack ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>The players will start the frame again? Just press the RE-RACK button!</Text>
                                </View>
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
                                endOfFrame: !prev.endOfFrame
                            }))
                        }}>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF FRAME</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.endOfFrame ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>The player that needs snookers to win the frame may press the CONCEIDE button to give up a frame. This is not the only option to end it, though. Frame will end automatically when the last black is potted OR when there is only the black remaining and the difference between the players' points is greater than 7 at the moment when the winner ends its turn. If the winner is at the table and doesn't want to pot the last black can press the END OF FRAME button that will appear on the screen. </Text>
                                </View>
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
                        }}>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF MATCH</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={helpOptions.endOfMatch ? styles.explanationContainer : {display: 'none'}}>
                                    <Text style={styles.explanationText}>After the end of a frame you may end the whole match by pressing the END MATCH button. If you want to continue press the NEXT FRAME button instead</Text>
                                </View>
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
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 3
    },
    summaryContainer2: {
        height: '20%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    explanationText: {
        color: '#fff',
        fontFamily: 'score',
        textAlign: 'justify'
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
        fontSize: 18
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