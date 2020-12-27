import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Dimensions, TouchableNativeFeedback, ImageBackground, View, Text, TextInput, Image, Animated, Easing } from 'react-native';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'
import red15 from '../assets/Ball/15reds.png'
import red10 from '../assets/Ball/10reds.png'
import red6 from '../assets/Ball/6reds.png'

const StartScreen = props => {
    const [proMode, setProMode] = useState(false)
    const [reds, setReds] = useState(15)
    
    const [mainOverlay, setMainOverlay] = useState(true)
    const [mainOverlayOut, setMainOverlayOut] = useState(false)
    const [error, setError] = useState(false)

    const [p1Name, setP1Name] = useState('')
    const [p2Name, setP2Name] = useState('')

    const fadeAnim = useRef(new Animated.Value(1)).current
    const fadeAnimError = useRef(new Animated.Value(0)).current
    const turnAround15 = useRef(new Animated.Value(0)).current
    const turnAround10 = useRef(new Animated.Value(0)).current
    const turnAround6 = useRef(new Animated.Value(0)).current

    const turn15 = turnAround15.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    const turn10 = turnAround10.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    const turn6 = turnAround6.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }
    
    const fadeInError = val => {
        Animated.timing(fadeAnimError, {
          toValue: val,
          duration: 300,
          useNativeDriver: true
        }).start();
      };

    const aroundAnimation = (anim) => {
        Animated.sequence([
            Animated.timing(anim, {
                toValue: 0.5,
                duration: 500,
                useNativeDriver: true
              }),
              Animated.timing(anim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
              })
        ]).start()
    }

    useEffect(() => {
        fadeOut()
        setTimeout(() => {
            setMainOverlay(false)
        }, 2000)
    }, [])

    return (
        <View style={styles.main}>
            {mainOverlay && <Animated.View style={[styles.mainOverlay, {opacity:fadeAnim }]}/>}
            <ImageBackground style={styles.backgroundImage} source={cloth}>
                {error && <Animated.View style={[styles.overlay, {opacity: fadeAnimError}]}>
                    <Animated.View style={[styles.errorContainer, {opacity: fadeAnimError}]}>
                        <ImageBackground style={styles.backgroundImage} source={wood}>
                            <View style={styles.coverSmall}>
                                <View style={styles.errorMessage}>
                                    <Text style={styles.errorMessageTextHeader}>Invalid name!</Text>
                                    <Text style={styles.errorMessageText}>Please, enter a correct one before starting the game. Player's name must be at least 2 characters long.</Text>
                                </View>
                                <View style={styles.smallButtonContainer}>
                                    <TouchableNativeFeedback
                                    onPress={() => {
                                        fadeInError(0)
                                        setTimeout(() => {setError(false)}, 300)
                                    }}
                                    background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                        <View style={styles.smallButton}>
                                            <Text style={styles.smallButtonText}>OK</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </ImageBackground>
                    </Animated.View>
                </Animated.View>}
                <View style={styles.mainContainer}>
                    <ImageBackground style={styles.backgroundImage} source={wood}>
                        <View style={styles.cover}>
                            <View style={styles.appNameContainer}>
                                <Text style={styles.appName}>SNOOKER COUNTER</Text>
                            </View>
                            <View style={styles.playersContainer}>
                                <View style={{width: '100%', alignItems: 'center'}}>
                                    <Text style={styles.headerText}>PLAYER 1</Text>
                                    <TextInput 
                                        placeholder="Type player's name"
                                        placeholderTextColor='#bbb'
                                        onChangeText={setP1Name}
                                        textAlign='center'
                                        selectionColor='#ddd'
                                        maxLength={20}
                                        style={styles.textInput}/>
                                </View>
                                <View style={{marginTop: Dimensions.get('window').height <= 680 ? 5 : 10, width: '100%', alignItems: 'center'}}>
                                    <Text style={styles.headerText}>PLAYER 2</Text>
                                    <TextInput 
                                        placeholder="Type player's name"
                                        placeholderTextColor='#aaa'
                                        onChangeText={setP2Name}
                                        textAlign='center'
                                        selectionColor='#ddd'
                                        maxLength={20}
                                        style={styles.textInput}/>
                                </View>
                            </View>
                            <View style={{height: '25%'}}>
                                <Text style={styles.headerText}>NUMBER OF REDS</Text>
                                <View style={styles.redButtonsContainer}>
                                    <Animated.View style={[styles.redButtonContainer, {transform: [{ rotateY: turn15 }]}]}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setReds(15)
                                            aroundAnimation(turnAround15)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 15 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds15} source={red15}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </Animated.View>
                                    <Animated.View style={[styles.redButtonContainer, {transform: [{ rotateY: turn10 }]}]}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setReds(10)
                                            aroundAnimation(turnAround10)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 10 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds10} source={red10}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </Animated.View>
                                    <Animated.View style={[styles.redButtonContainer, {transform: [{ rotateY: turn6 }]}]}>
                                        <TouchableNativeFeedback 
                                        onPress={() => {
                                            setReds(6)
                                            aroundAnimation(turnAround6)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 6 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds6} source={red6}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </Animated.View>
                                </View>
                            </View>
                            <View style={{height: '25%'}}>
                                <Text style={styles.headerText}>COUNTER MODE</Text>
                                <View style={styles.modeContainer}>
                                    <View style={!proMode ? styles.modeButtonOn : styles.modeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(false)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.mode}>
                                                <Text style={styles.modeText}>Normal</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={proMode ? styles.modeButtonOn : styles.modeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(true)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.mode}>
                                                <Text style={styles.modeText}>Pro</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.buttonsContainer}>
                    <ImageBackground style={styles.backgroundImage} source={wood}>
                        <View style={styles.coverSmall}>
                            <View style={styles.startGame}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    if (p1Name.length >= 2 && p2Name.length >= 2){
                                        props.navigation.navigate({
                                            routeName: 'Score',
                                            params: {
                                                p1: p1Name,
                                                p2: p2Name,
                                                reds: reds,
                                                mode: proMode
                                            }
                                        })
                                    } else {
                                        setError(true)
                                        fadeInError(1)
                                    }
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.startGameButton}>
                                        <Text style={styles.startGameText}>START</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={styles.smallButtonContainer}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    props.navigation.navigate('Help')
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.smallButton}>
                                        <Text style={styles.smallButtonText}>How to use?</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )
}

StartScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000'
    },
    mainOverlay: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
       },
    backgroundImage: {
        height: '100%',
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
    mainContainer: {
        height: Dimensions.get('window').height < 680 ? '65%': '60%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 3
    },
    buttonsContainer: {
        height: '20%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },
    errorContainer: {
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
        height: '100%',
        width: '100%',
        padding: 20
       },
    coverSmall: {
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
    appNameContainer: {
        height: '15%'
    },
    appName: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 26
    },
    playersContainer: {
        height: '35%',
        width: '98%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 18
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 5,
        width: '80%',
        color: '#ddd',
        fontFamily: 'score'
    },
    redButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        height: '70%'
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
    modeButtonOff: {
        height: '75%',
        width: '30%',
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        opacity: 0.4,
        marginHorizontal: 10
    },
    modeButtonOn: {
        height: '75%',
        width: '30%',
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        marginHorizontal: 10
    },
    mode: {
        height: '100%',
        width: '100%',
        borderRadius: 22.5,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modeText: {
        fontFamily: 'score',
        fontSize: 16,
        textAlign: 'center',
        color: '#ddd'
    },
    modeContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        paddingVertical: 10,
        height: '70%',
        width: '100%'
    },
    startGame: {
        height: '35%',
        width: '50%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.4)',
        marginBottom: 5
    },
    startGameButton: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startGameText: {
        color: '#ddd',
        fontFamily: 'scoreBold',
        fontSize: 22
    },
    smallButtonContainer: {
        height: '25%',
        width: '40%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        marginVertical: 5
    },
    smallButton: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButtonText: {
        color: '#bbb',
        fontFamily: 'score',
        fontSize: 14
    }
})

export default StartScreen