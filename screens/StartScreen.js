import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback, ImageBackground, View, Text, TextInput, Image, KeyboardAvoidingView} from 'react-native';


const StartScreen = props => {
    const [proMode, setProMode] = useState(true)
    const [reds, setReds] = useState(15)

    const [p1Name, setP1Name] = useState()
    const [p2Name, setP2Name] = useState()

    return (
        <View style={styles.main}>
            <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
                <View style={styles.summaryContainer}>
                    <ImageBackground style={styles.img} source={require('../assets/png/wood.png')}>
                        <View style={styles.cover}>
                            <View style={styles.name}>
                                <Text style={styles.topHeader}>Snooker Counter</Text>
                            </View>
                            <View style={styles.playersContainer}>
                                <View>
                                    <Text style={styles.headerText}>PLAYER 1</Text>
                                    <TextInput 
                                        placeholder="Type player's name"
                                        onChangeText={setP1Name}/>
                                </View>
                                <View style={{marginTop: 10}}>
                                    <Text style={styles.headerText}>PLAYER 2</Text>
                                    <TextInput 
                                        placeholder="Type player's name"
                                        onChangeText={setP2Name}/>
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
                                    <View style={proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(true)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.proMode}>
                                                <Text style={styles.proModeText}>Normal</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={!proMode ? styles.proModeButtonOn : styles.proModeButtonOff}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            setProMode(false)
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
                                    props.navigation.navigate({
                                        routeName: 'Score',
                                        params: {
                                            p1: p1Name,
                                            p2: p2Name,
                                            reds: reds,
                                            mode: proMode
                                        }
                                    })
                                }}
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.nextFrameButton}>
                                        <Text style={styles.nextFrameText}>START</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={styles.endMatch}>
                                <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                    <View style={styles.endMatchButton}>
                                        <Text style={styles.endMatchText}>END GAME</Text>
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
    summaryContainer: {
        height: '60%',
        width: '80%',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 30,
        borderWidth: 3
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
        backgroundColor: 'rgba(60,5,0, 0.8)',
        height: '100%',
        width: '100%',
        padding: 20
       },
    cover2: {
        backgroundColor: 'rgba(60,5,0, 0.8)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
       },
    name: {
        height: '15%'
    },
    topHeader: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 30
    },
    playersContainer: {
        height: '35%',
        width: '98%',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 20
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