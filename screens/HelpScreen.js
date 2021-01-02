import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'
import HelpOption from '../components/HelpOption'
 
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

    useEffect(() => {
        const backAction = () => {
          props.navigation.goBack()
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);

    return (
    <View style={styles.main}>
        <ImageBackground style={styles.img} source={cloth}>
            <ScrollView style={{width: '100%'}} contentContainerStyle={{width: '100%'}}>
                <View style={{justifyContent: 'center'}}>
                <View style={styles.topContainer}>
                        <ImageBackground style={styles.img2} source={wood}>
                            <View style={[styles.cover, {backgroundColor: 'rgba(0,0,0, 0.5)'}]}>
                                <View style={styles.topHeader}>
                                    <View>
                                        <Text style={styles.topHeaderText}>FAQ</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="start"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="pot"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="safe"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="switchP"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="foul"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="freeBall"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="redWentIn"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="plusOneRed"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="longPot"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="undo"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="reRack"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="right" option="endOfFrame"/>
                    <HelpOption helpOptions={helpOptions} setHelpOptions={setHelpOptions} side="left" option="endOfMatch"/>
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
    topContainer: {
        width: '100%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        marginBottom: 30,
        borderWidth: 3,
    },
    topHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    topHeaderText: {
        color: '#fff',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 36
    },
    cover: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        width: '100%',
        padding: 20
       },
    topHeader: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        textAlign: 'center',
        fontSize: 26
    },
})

export default HelpScreen