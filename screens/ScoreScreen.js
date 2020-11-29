import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, TouchableNativeFeedback, Text} from 'react-native';

import Ball from '../components/Ball'
import BallContainer from '../components/BallContainer'
import ScoreContainer from '../components/ScoreContainer'
import MissContainer from '../components/MissContainer'
import SafetyContainer from '../components/SafetyContainer'
import FoulContainer from '../components/FoulContainer'
import AdditionalRedContainer from '../components/AdditionalRedContainer'
import ConceideContainer from '../components/ConceideContainer'
import SwitchButton from '../components/SwitchButton'

import FrameOverScreen from '../screens/FrameOverScreen'
import GameOverScreen from '../screens/GameOverScreen'



 
const ScoreScreen = props => {
    const mode = props.navigation.getParam('reds')

    const p1Name = props.navigation.getParam('p1')
    const p2Name = props.navigation.getParam('p2')

    const [p1Points, setP1Points] = useState(0)
    const [p2Points, setP2Points] = useState(0)
    const [p1Frames, setP1Frames] = useState(0)
    const [p2Frames, setP2Frames] = useState(0)

    const [frameRecord, setFrameRecord] = useState([])

    const [prevShot, setPrevShot] = useState([])
    const [back, setBack] = useState(0)
    const [backMode, setBackMode] = useState(false)
    

    const [remaining, setRemaining] = useState(props.navigation.getParam('reds')*8 + 27)
    
    const [activeBallsP1, setActiveBallsP1] = useState({
        '1': false,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true})
    const [activeBallsP2, setActiveBallsP2] = useState({
        '1': false,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true})
    
    const [overlayP1, setOverlayP1] = useState(false)
    const [overlayP2, setOverlayP2] = useState(false)

    const [freeBallModeP1, setFreeBallModeP1] = useState(false)
    const [freeBallModeP2, setFreeBallModeP2] = useState(false)

    const [freeBallP1, setFreeBallP1] = useState(true)
    const [freeBallP2, setFreeBallP2] = useState(true)

    const [longPotP1, setLongPotP1] = useState(false)
    const [longPotP2, setLongPotP2] = useState(false)

    const [breakP1, setBreakP1] = useState(0)
    const [breakP2, setBreakP2] = useState(0)

    const [currentBreakP1, setCurrentBreakP1] = useState(0)
    const [currentBreakP2, setCurrentBreakP2] = useState(0)

    const [proMode, setProMode] = useState(props.navigation.getParam('mode'))


    const [statsP1, setStatsP1] = useState({
        points: 0,
        pots: 0,
        miss: 0,
        long: 0,
        longMiss: 0,
        safe: 0,
        unsafe: 0,
        foulPointsGivenAway: 0
    })
    
    const successP1 = {
        potSuccess: statsP1.pots+statsP1.miss === 0 ? 0 : statsP1.pots/(statsP1.pots+statsP1.miss)*100,
        longPotSuccess: statsP1.long+statsP1.longMiss === 0 ? 0 : statsP1.long/(statsP1.long+statsP1.longMiss)*100,
        safetySuccess:statsP1.safe+statsP1.unsafe === 0 ? 0 :  statsP1.safe/(statsP1.safe+statsP1.unsafe)*100
    }
    const [statsP2, setStatsP2] = useState({
        points: 0,
        pots: 0,
        miss: 0,
        long: 0,
        longMiss: 0,
        safe: 0,
        unsafe: 0,
        foulPointsGivenAway: 0
    })

    const successP2 = {
        potSuccess: statsP2.pots+statsP2.miss === 0 ? 0 : statsP2.pots/(statsP2.pots+statsP2.miss)*100,
        longPotSuccess: statsP2.long+statsP2.longMiss === 0 ? 0 : statsP2.long/(statsP2.long+statsP2.longMiss)*100,
        safetySuccess:statsP2.safe+statsP2.unsafe === 0 ? 0 :  statsP2.safe/(statsP2.safe+statsP2.unsafe)*100
    }

    const [endOfFrame, setEndOfFrame] = useState(false)
    const [endOfMatch, setEndOfMatch] = useState(false)

    const [extraBlack, setExtraBlack] = useState(false)

    useEffect(() => {
        console.log('tutaj')
        if(!backMode){
            if (prevShot.length > 4) {
                setPrevShot(prev => 
                    ([
                    ...prev.slice(1),
                    {
                    p1Points: p1Points,
                    p2Points: p2Points,
                    remaining: remaining,
                    activeBallsP1: activeBallsP1,
                    activeBallsP2: activeBallsP2,
                    overlayP1: overlayP1,
                    overlayP2: overlayP2,
                    freeBallModeP1: freeBallModeP1,
                    freeBallModeP2: freeBallModeP2,
                    freeBallP1: freeBallP1,
                    freeBallP2: freeBallP2,
                    longPotP1: longPotP1,
                    longPotP2: longPotP2,
                    breakP1: breakP1,
                    breakP2: breakP2,
                    currentBreakP1: currentBreakP1,
                    currentBreakP2: currentBreakP2,
                    statsP1: statsP1,
                    statsP2: statsP2
                }]))
            } else {
                setPrevShot(prev => 
                    ([
                    ...prev,
                    {
                    p1Points: p1Points,
                    p2Points: p2Points,
                    remaining: remaining,
                    activeBallsP1: activeBallsP1,
                    activeBallsP2: activeBallsP2,
                    overlayP1: overlayP1,
                    overlayP2: overlayP2,
                    freeBallModeP1: freeBallModeP1,
                    freeBallModeP2: freeBallModeP2,
                    freeBallP1: freeBallP1,
                    freeBallP2: freeBallP2,
                    longPotP1: longPotP1,
                    longPotP2: longPotP2,
                    breakP1: breakP1,
                    breakP2: breakP2,
                    currentBreakP1: currentBreakP1,
                    currentBreakP2: currentBreakP2,
                    statsP1: statsP1,
                    statsP2: statsP2
                }]))
            }}
    }, [remaining, statsP1, statsP2])

    const modifyArray = () => {
            const arr = prevShot
            if (arr.length === 5) {
                setPrevShot(arr.splice(1,back)
                )
            } else {
                setPrevShot(arr.splice(0,back+1)
                )
            }
            
        
    }

    useEffect(()=> {
        setBreakP1(prev => prev < currentBreakP1 ? currentBreakP1 : prev)
        setBreakP2(prev => prev < currentBreakP2 ? currentBreakP2 : prev)
    }, [currentBreakP1, currentBreakP2])

    const activateBallsP1 = val => {
        setActiveBallsP1({
            '1': val === 1 ? false : true,
            '2': val === 2 || val === 8 ? false : true,
            '3': val === 3 || val === 8 ? false : true,
            '4': val === 4 || val === 8 ? false : true,
            '5': val === 5 || val === 8 ? false : true,
            '6': val === 6 || val === 8 ? false : true,
            '7': val === 7 || val === 8 ? false : true,
        })
    }

    const activateBallsP2 = val => {
        setActiveBallsP2({
            '1': val === 1 ? false : true,
            '2': val === 2 || val === 8 ? false : true,
            '3': val === 3 || val === 8 ? false : true,
            '4': val === 4 || val === 8 ? false : true,
            '5': val === 5 || val === 8 ? false : true,
            '6': val === 6 || val === 8 ? false : true,
            '7': val === 7 || val === 8 ? false : true,
        })
    }

        useEffect(() => {
            if (remaining === 27) {
                activateBallsP1(2)
                activateBallsP2(2)
            } else if (remaining === 25) {
                activateBallsP1(3)
                activateBallsP2(3)
            } else if (remaining === 22) {
                activateBallsP1(4)
                activateBallsP2(4)
            } else if (remaining === 18) {
                activateBallsP1(5)
                activateBallsP2(5)
            } else if (remaining === 13) {
                activateBallsP1(6)
                activateBallsP2(6)
            } else if (remaining === 7) {
                activateBallsP1(7)
                activateBallsP2(7)
            }
        } , [remaining, statsP1, statsP2])

        useEffect(() => {
            if (remaining === 7 && extraBlack) {
                if (p1Points > p2Points) {
                    setEndOfFrame(true)
                    setExtraBlack(false)
                } else if (p1Points < p2Points) {
                    setEndOfFrame(true)
                    setExtraBlack(false)
                }
            } else if (remaining === 7) {
                if (p1Points - p2Points > 7 && overlayP1 || p1Points - p2Points > 7 && !overlayP1 && !overlayP2) {
                    setEndOfFrame(true)
                } else if (p2Points - p1Points > 7 && overlayP2 || p2Points - p1Points > 7 && !overlayP1 && !overlayP2) {
                    setEndOfFrame(true)
                }
            } else if (remaining === 0) {
                if (!extraBlack) {
                    if (p1Points > p2Points) {
                        setEndOfFrame(true)
                    } else if (p1Points < p2Points) {
                        setEndOfFrame(true)
                    } else if (p1Points === p2Points) {
                        setRemaining(7)
                        setExtraBlack(true)
                        setOverlayP1(false)
                        setOverlayP2(false)
                    }
                } else {
                    if (p1Points > p2Points) {
                        setEndOfFrame(true)
                        setExtraBlack(false)
                    } else if (p1Points < p2Points) {
                        setEndOfFrame(true)
                        setExtraBlack(false)
                }
            } 
        }}, [statsP1, statsP2])

        useEffect(()=>{
            if (endOfFrame){
                if (p1Points > p2Points) {
                    setP1Frames(prev => prev+1)
                    setStatsP1(prev => ({
                        ...prev,
                        points: prev.points+p1Points
                    }))
                    setStatsP2(prev => ({
                        ...prev,
                        points: prev.points+p2Points
                    }))
                } else if (p1Points < p2Points) {
                    setP2Frames(prev => prev+1)
                    setStatsP1(prev => ({
                        ...prev,
                        points: prev.points+p1Points
                    }))
                    setStatsP2(prev => ({
                        ...prev,
                        points: prev.points+p2Points
                    }))
            }}
        }, [endOfFrame])

        const score = <ImageBackground style={styles.img} source={require('../assets/png/green-snooker-cloth-background.jpg')}>
        <View style={styles.bar}/>
        {overlayP1 && proMode ? <View style={styles.overlay}>
                <SwitchButton 
                    setCurrentBreak={setCurrentBreakP2}
                    setFreeBP1={setFreeBallP1}
                    setFreeBP2={setFreeBallP2}
                    setFreeBall={setFreeBallModeP2}
                    setOverlayP1={setOverlayP1}
                    setOverlayP2={setOverlayP2}
                    setRemaining={setRemaining}
                    remaining={remaining}
                    activateP1={setActiveBallsP1}
                    activateP2={setActiveBallsP2}
                    activateBallsP1={activateBallsP1}
                    activateBallsP2={activateBallsP2}
                    stats={setStatsP1}
                    backMode={backMode}
                    setBackMode={setBackMode}
                    setBack={setBack}
                    modifyArray={modifyArray}
                    />
            </View> : overlayP1 && <View style={styles.overlay}/>}
        {overlayP2 && proMode ? <View style={[styles.overlay, {left: Dimensions.get('window').width/2}]}>
                <SwitchButton 
                    setCurrentBreak={setCurrentBreakP1}
                    setFreeBP1={setFreeBallP1}
                    setFreeBP2={setFreeBallP2}
                    setFreeBall={setFreeBallModeP1}
                    setOverlayP1={setOverlayP1}
                    setOverlayP2={setOverlayP2}
                    setRemaining={setRemaining}
                    remaining={remaining}
                    activateP1={setActiveBallsP1}
                    activateP2={setActiveBallsP2}
                    activateBallsP1={activateBallsP1}
                    activateBallsP2={activateBallsP2}
                    stats={setStatsP1}
                    backMode={backMode}
                    setBackMode={setBackMode}
                    setBack={setBack}
                    modifyArray={modifyArray}/> 
            </View> : overlayP2 && <View style={[styles.overlay, {left: Dimensions.get('window').width/2}]}/>}
            <View style={{height: 25}}/>
            <ScoreContainer 
                p1Name={p1Name}
                p2Name={p2Name}
                p1={p1Points} 
                p2={p2Points}
                f1={p1Frames}
                f2={p2Frames}
                remaining={remaining}
                setRemaining={setRemaining}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                proMode={proMode}
                setProMode={setProMode}
                p1Points={setP1Points} 
                p2Points={setP2Points}
                activateP1={setActiveBallsP1}
                activateP2={setActiveBallsP2}
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                mode={mode}
                setFreeBallModeP1={setFreeBallModeP1}
                setFreeBallModeP2={setFreeBallModeP2}
                setFreeBallP1={setFreeBallP1}
                setFreeBallP2={setFreeBallP2}
                setLongPotP1={setLongPotP1}
                setLongPotP2={setLongPotP2}
                setBreakP1={setBreakP1}
                setBreakP2={setBreakP2}
                setStatsP1={setStatsP1}
                setStatsP2={setStatsP2}
                prevShot={prevShot}
                setPrevShot={setPrevShot}
                back={back}
                setBack={setBack}
                backMode={backMode}
                setBackMode={setBackMode}
                modifyArray={modifyArray}
                navigation={props.navigation}
                style={{zIndex: 3}}/>
            
            <BallContainer 
                p1Points={setP1Points} 
                p1={p1Points} 
                p2Points={setP2Points} 
                p2={p2Points}
                activateP1={setActiveBallsP1}
                activeBallsP1={activeBallsP1}
                activateP2={setActiveBallsP2}
                activeBallsP2={activeBallsP2}
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                remaining={remaining}
                setRemaining={setRemaining}
                fbP1={freeBallModeP1}
                setFreeBallP1={setFreeBallModeP1}
                fbP2={freeBallModeP2}
                setFreeBallP2={setFreeBallModeP2}
                freeBallP1={freeBallP1}
                setFreeBP1={setFreeBallP1}
                freeBallP2={freeBallP2}
                setFreeBP2={setFreeBallP2}
                statsP1={setStatsP1}
                statsP2={setStatsP2}
                setLongPotP1={setLongPotP1}
                longPotP1={longPotP1}
                setLongPotP2={setLongPotP2}
                longPotP2={longPotP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                proMode={proMode}
                backMode={backMode}
                setBackMode={setBackMode}
                setBack={setBack}
                modifyArray={modifyArray}/>
            <MissContainer 
                activateP1={setActiveBallsP1}
                activateP2={setActiveBallsP2}
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                remaining={remaining}
                setRemaining={setRemaining}
                fbP1={freeBallModeP1}
                setFreeBallP1={setFreeBallModeP1}
                fbP2={freeBallModeP2}
                setFreeBallP2={setFreeBallModeP2}
                setFreeBP1={setFreeBallP1}
                setFreeBP2={setFreeBallP2}
                statsP1={setStatsP1}
                statsP2={setStatsP2}
                setLongPotP1={setLongPotP1}
                longPotP1={longPotP1}
                setLongPotP2={setLongPotP2}
                longPotP2={longPotP2}
                currentBreakP1={currentBreakP1}
                currentBreakP2={currentBreakP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                backMode={backMode}
                setBackMode={setBackMode}
                setBack={setBack}
                modifyArray={modifyArray}
                />
            <View style={styles.bottomContainer}>
                <ImageBackground style={styles.bottom} source={require('../assets/png/wood.png')}>
                    <View style={styles.cover}>
                        <SafetyContainer 
                            activateP1={setActiveBallsP1}
                            activateP2={setActiveBallsP2}
                            activateBallsP1={activateBallsP1}
                            activateBallsP2={activateBallsP2}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            fbP1={freeBallModeP1}
                            setFreeBallP1={setFreeBallModeP1}
                            fbP2={freeBallModeP2}
                            setFreeBallP2={setFreeBallModeP2}
                            setFreeBP1={setFreeBallP1}
                            setFreeBP2={setFreeBallP2}
                            statsP1={setStatsP1}
                            statsP2={setStatsP2}
                            setLongPotP1={setLongPotP1}
                            setLongPotP2={setLongPotP2}
                            currentBreakP1={currentBreakP1}
                            currentBreakP2={currentBreakP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            backMode={backMode}
                            setBackMode={setBackMode}
                            setBack={setBack}
                            modifyArray={modifyArray}
                            style={proMode && {display: 'none'}}
                            />
                        <FoulContainer 
                            p1Points={setP1Points} 
                            p1={p1Points} 
                            p2Points={setP2Points} 
                            p2={p2Points}
                            activateP1={setActiveBallsP1}
                            activateP2={setActiveBallsP2}
                            activateBallsP1={activateBallsP1}
                            activateBallsP2={activateBallsP2}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            fbP1={freeBallModeP1}
                            setFreeBallP1={setFreeBallModeP1}
                            fbP2={freeBallModeP2}
                            setFreeBallP2={setFreeBallModeP2}
                            setFreeBP1={setFreeBallP1}
                            setFreeBP2={setFreeBallP2}
                            setLongPotP1={setLongPotP1}
                            setLongPotP2={setLongPotP2}
                            currentBreakP1={currentBreakP1}
                            currentBreakP2={currentBreakP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            statsP1={setStatsP1}
                            statsP2={setStatsP2}
                            backMode={backMode}
                            setBackMode={setBackMode}
                            setBack={setBack}
                            modifyArray={modifyArray}/>
                        <AdditionalRedContainer 
                            remaining={remaining}
                            setRemaining={setRemaining}
                            overlayP1={overlayP1}
                            overlayP2={overlayP2}
                            activeBallsP1={activeBallsP1}
                            activeBallsP2={activeBallsP2}
                            p1Points={setP1Points} 
                            p2Points={setP2Points} 
                            statsP1={setStatsP1}
                            statsP2={setStatsP2}
                            freeBallP1={freeBallP1}
                            freeBallP2={freeBallP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            backMode={backMode}
                            setBackMode={setBackMode}
                            setBack={setBack}
                            modifyArray={modifyArray}
                            />
                        <ConceideContainer 
                            navigation={props.navigation}
                            p1Points={p1Points}
                            p2Points={p2Points}
                            successP1={successP1}
                            successP2={successP2}
                            statsP1={statsP1}
                            statsP2={statsP2}
                            setStatsP1={setStatsP1}
                            setStatsP2={setStatsP2}
                            breakP1={breakP1}
                            breakP2={breakP2}
                            remaining={remaining}
                            p1Name={p1Name}
                            p2Name={p2Name}
                            setP1Frames={setP1Frames}
                            setP2Frames={setP2Frames}
                            setEndOfFrame={setEndOfFrame}
                            setFreeBallP1={setFreeBallModeP1}
                            setFreeBallP2={setFreeBallModeP2}
                            setFreeBP1={setFreeBallP1}
                            setFreeBP2={setFreeBallP2}
                            backMode={backMode}
                            setBackMode={setBackMode}
                            setBack={setBack}
                            modifyArray={modifyArray}/>
                    </View>
                </ImageBackground>
            </View>
            

        </ImageBackground>
        

    return (
        <View style={styles.main}>
            {endOfFrame ? <FrameOverScreen 
            mode={mode}
            proMode={proMode}
            p1Frames={p1Frames}
            p2Frames={p2Frames}
            p1Name={p1Name}
            p2Name={p2Name}
            p1Points={p1Points}
            p2Points={p2Points}
            statsP1={statsP1}
            statsP2={statsP2}
            successP1={successP1}
            successP2={successP2}
            breakP1={breakP1}
            breakP2={breakP2}
            setEndOfFrame={setEndOfFrame}
            setP1Points={setP1Points}
            setP2Points={setP2Points}
            setRemaining={setRemaining}
            setOverlayP1={setOverlayP1}
            setOverlayP2={setOverlayP2}
            setCurrentBreakP1={setCurrentBreakP1}
            setCurrentBreakP2={setCurrentBreakP2}
            setActiveBallsP1={setActiveBallsP1}
            setActiveBallsP2={setActiveBallsP2}
            activateBallsP1={activateBallsP1}
            activateBallsP2={activateBallsP2}
            setFrameRecord={setFrameRecord}
            setGameOver={setEndOfMatch}
            setPrevShot={setPrevShot}
            backMode={backMode}
            setBack={setBack}
            />  : endOfMatch ? <GameOverScreen 
            mode={mode}
            proMode={proMode}
            p1Frames={p1Frames}
            p2Frames={p2Frames}
            p1Name={p1Name}
            p2Name={p2Name}
            p1Points={p1Points}
            p2Points={p2Points}
            statsP1={statsP1}
            statsP2={statsP2}
            successP1={successP1}
            successP2={successP2}
            breakP1={breakP1}
            breakP2={breakP2}
            setEndOfFrame={setEndOfFrame}
            setP1Points={setP1Points}
            setP2Points={setP2Points}
            setRemaining={setRemaining}
            setOverlayP1={setOverlayP1}
            setOverlayP2={setOverlayP2}
            setCurrentBreakP1={setCurrentBreakP1}
            setCurrentBreakP2={setCurrentBreakP2}
            setActiveBallsP1={setActiveBallsP1}
            setActiveBallsP2={setActiveBallsP2}
            activateBallsP1={activateBallsP1}
            activateBallsP2={activateBallsP2}
            setGameOver={setEndOfMatch}
            frameRecord={frameRecord}
            navigation={props.navigation}
            /> : score}
            
        </View>
    )}
 
    ScoreScreen.navigationOptions = {
        headerShown: false
    }
    

const styles = StyleSheet.create({
   main: {
       flex: 1,
   },
   overlay: {
    height: '100%',
    width: '50%',
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
   },
   bar: {
    left:Dimensions.get('window').width/2,
    height: '100%',
    width: 2,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 2
   },
   img: {
    height: '100%',
    width: '100%'
    },
   bottom: {
       borderRadius: 20,
       paddingBottom: 200
   },
   bottomContainer: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 5,
    paddingBottom: 200,
    overflow: 'hidden'
   },
   cover: {
    paddingTop: 3,
    backgroundColor: 'rgba(60,5,0, 0.6)',
    paddingBottom: 200,

   },

})
 
// backgroundColor: 'rgba(60,5,0, 0.9)',

export default ScoreScreen