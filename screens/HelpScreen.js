import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
const HelpScreen = props => {

    return (
    <View style={styles.main}>
        <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
            <ScrollView contentContainerStyle={{width: '100%'}}>
                <View style={{justifyContent: 'center'}}>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                            <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>START</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                            </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>POT/MISS</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SAFE/UNSAFE</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>SWITCH PLAYERS</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FOUL</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>FREE BALL</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RED WENT IN</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>LONG POT</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>UNDO/REDO</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>RE-RACK</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>
                                
                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF FRAME</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        </ImageBackground>
                    </View>
                    <View style={styles.summaryContainer}>
                        <ImageBackground style={styles.img2} source={require('../assets/png/wood.png')}>
                        <TouchableNativeFeedback>
                            <View style={styles.cover}>

                                <View style={styles.helpOptionHeader}>
                                    <View>
                                        <Text style={styles.headerText}>END OF MATCH</Text>
                                    </View>
                                    <View>
                                        <Image style={{height: 50, width: 50}} source={require('../assets/Ball/ball.png')} />
                                    </View>
                                </View>
                                <View style={styles.playersContainer}>
                                    
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
    playersContainer: {
        width: '98%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

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
        flexDirection: 'row'
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