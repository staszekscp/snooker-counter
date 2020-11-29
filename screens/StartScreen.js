import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback, ImageBackground, View, Text, TextInput, Image, KeyboardAvoidingView} from 'react-native';


const StartScreen = props => {
    const [proMode, setProMode] = useState(false)
    const [reds, setReds] = useState(15)
    
    const [error, setError] = useState(false)

    const [p1Name, setP1Name] = useState('')
    const [p2Name, setP2Name] = useState('')

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
                {error && <View style={styles.overlay}>
                    <View style={styles.summaryContainerError}>
                        <ImageBackground style={styles.img} source={require('../assets/png/wood.png')}>
                            <View style={styles.coverError}>
                                <View style={styles.errorMessage}>
                                    <Text style={styles.errorMessageTextHeader}>Invalid name!</Text>
                                    <Text style={styles.errorMessageText}>Please, enter a correct one before starting the game. Player's name must be at least 2 characters long.</Text>
                                </View>
                                <View style={styles.endMatch}>
                                    <TouchableNativeFeedback
                                    onPress={() => {
                                        setError(false)
                                    }}
                                    background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                        <View style={styles.endMatchButton}>
                                            <Text style={styles.endMatchText}>OK</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>}
                <View style={styles.summaryContainer}>
                    <ImageBackground style={styles.img} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.name}>
                                <Text style={styles.topHeader}>SNOOKER COUNTER</Text>
                            </View>
                            <View style={styles.playersContainer}>
                                <View>
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
                                <View style={{marginTop: 10}}>
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
                            <View>
                                <Text style={styles.headerText}>NUMBER OF REDS</Text>
                                <View style={styles.redButtonsContainer}>
                                    <View style={styles.redButtonContainer}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setReds(15)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 15 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds15} source={require('../assets/Ball/15reds.png')}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={styles.redButtonContainer}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setReds(10)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 10 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds10} source={require('../assets/Ball/10reds.png')}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={styles.redButtonContainer}>
                                        <TouchableNativeFeedback 
                                        onPress={() => {
                                            setReds(6)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={reds === 6 ? styles.redButtonOn : styles.redButtonOff}>
                                                <Image style={styles.reds6} source={require('../assets/Ball/6reds.png')}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.headerText}>COUNTER MODE</Text>
                                <View style={styles.proModeContainer}>
                                    <View style={!proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(false)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.proMode}>
                                                <Text style={styles.proModeText}>Normal</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(true)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.proMode}>
                                                <Text style={styles.proModeText}>Pro</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.summaryContainer2}>
                    <ImageBackground style={styles.img} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover2}>
                            <View style={styles.nextFrame}>
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
                                    }
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.nextFrameButton}>
                                        <Text style={styles.nextFrameText}>START</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={styles.endMatch}>
                                <TouchableNativeFeedback
                                onPress={() => {
                                    props.navigation.navigate('Help')
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.endMatchButton}>
                                        <Text style={styles.endMatchText}>How to use?</Text>
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
    headerTitle: 'Snooker Counter',
    headerStyle: {
        backgroundColor: 'rgb(40,5,0)'
    },
    headerTintColor: '#e0de94',
    headerTitleStyle: {
        fontFamily: "score",
        fontSize: 20,
    }
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
        height: '60%',
        width: '80%',
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
        height: '100%',
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

export default StartScreen