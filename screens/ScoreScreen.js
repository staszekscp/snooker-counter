import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, Animated, Text, TouchableNativeFeedback, Easing } from 'react-native';

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

import cloth from '../assets/png/green-snooker-cloth-background.jpg'
import wood from '../assets/png/wood.png'
 
const ScoreScreen = props => {
    const mode = props.navigation.getParam('reds') //
    const proMode = props.navigation.getParam('mode') //

    const [endModal, setEndModal] = useState(false)

    const p1Name = props.navigation.getParam('p1') //
    const p2Name = props.navigation.getParam('p2') //

    const [p1Points, setP1Points] = useState(0) //
    const [p2Points, setP2Points] = useState(0) //
    const [p1Frames, setP1Frames] = useState(0) //
    const [p2Frames, setP2Frames] = useState(0) //

    const [frameRecord, setFrameRecord] = useState([]) //

    const [previousShots, setPreviousShots] = useState([]) //
    const [currentShotIndex, setCurrentShotIndex] = useState(0) //
    const [backwardMode, setBackwardMode] = useState(false) //
    
    const [remaining, setRemaining] = useState(props.navigation.getParam('reds')*8 + 27) //
    
    const [activeBallsP1, setActiveBallsP1] = useState({
        '1': true,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false})
    const [activeBallsP2, setActiveBallsP2] = useState({
        '1': true,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false})
    
    const [overlayP1, setOverlayP1] = useState(false) //
    const [overlayP2, setOverlayP2] = useState(false) //

    const [freeBallP1, setFreeBallP1] = useState(false) //
    const [freeBallP2, setFreeBallP2] = useState(false) //

    const [freeBallButtonP1, setFreeBallButtonP1] = useState(false) //
    const [freeBallButtonP2, setFreeBallButtonP2] = useState(false) //

    const [longPotP1, setLongPotP1] = useState(false) //
    const [longPotP2, setLongPotP2] = useState(false) //

    const [breakP1, setBreakP1] = useState(0) //
    const [breakP2, setBreakP2] = useState(0) //

    const [currentBreakP1, setCurrentBreakP1] = useState(0) //
    const [currentBreakP2, setCurrentBreakP2] = useState(0) //

    const [statsP1, setStatsP1] = useState({
        points: 0,
        pots: 0,
        miss: 0,
        long: 0,
        longMiss: 0,
        safe: 0,
        unsafe: 0,
        foulPointsGivenAway: 0
    }) //
    
    const successP1 = {
        potSuccess: statsP1.pots+statsP1.miss === 0 ? 0 : statsP1.pots/(statsP1.pots+statsP1.miss)*100,
        longPotSuccess: statsP1.long+statsP1.longMiss === 0 ? 0 : statsP1.long/(statsP1.long+statsP1.longMiss)*100,
        safetySuccess:statsP1.safe+statsP1.unsafe === 0 ? 0 :  statsP1.safe/(statsP1.safe+statsP1.unsafe)*100
    } //

    const [statsP2, setStatsP2] = useState({
        points: 0,
        pots: 0,
        miss: 0,
        long: 0,
        longMiss: 0,
        safe: 0,
        unsafe: 0,
        foulPointsGivenAway: 0
    }) //

    const successP2 = {
        potSuccess: statsP2.pots+statsP2.miss === 0 ? 0 : statsP2.pots/(statsP2.pots+statsP2.miss)*100,
        longPotSuccess: statsP2.long+statsP2.longMiss === 0 ? 0 : statsP2.long/(statsP2.long+statsP2.longMiss)*100,
        safetySuccess:statsP2.safe+statsP2.unsafe === 0 ? 0 :  statsP2.safe/(statsP2.safe+statsP2.unsafe)*100
    } //

    const [endOfFrame, setEndOfFrame] = useState(false) //
    const [endOfMatch, setEndOfMatch] = useState(false) //

    const [extraBlack, setExtraBlack] = useState(false) //

//========================================================================================================
const fadeAnimModal = useRef(new Animated.Value(0)).current

const fadeInModal = val => {
    Animated.timing(fadeAnimModal, {
      toValue: val,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

const fadeBar = useRef(new Animated.Value(0)).current

const fadeBarAnim = () => {
    Animated.timing(fadeBar, {
      toValue: 1,
      delay: 2000,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  const start = useRef(new Animated.Value(400)).current

  const startAnim = () => {
      Animated.timing(start, {
          toValue: 0,
          delay: 500,
          duration: 2000,
          easing: Easing.elastic(1),
          useNativeDriver: true
      }).start()
  }

  useEffect(() => {
      if (!endOfFrame){
        startAnim()
        fadeBarAnim()
    }
  }, [endOfFrame])
//========================================================================================================

    const endFrame = () => {
        setEndModal(true)
        fadeInModal(1)
    }

    const finishFrame = () => {
        setEndOfFrame(true)
        setEndModal(false)
    }

    const startNewFrame = () => {
        setEndModal(false)
    }

    const setShot = val => {
        setP1Points(previousShots[val].p1Points)
        setP2Points(previousShots[val].p2Points)
        setRemaining(previousShots[val].remaining)
        setActiveBallsP1(previousShots[val].activeBallsP1)
        setActiveBallsP2(previousShots[val].activeBallsP2)
        setOverlayP1(previousShots[val].overlayP1),
        setOverlayP2(previousShots[val].overlayP2),
        setFreeBallP1(previousShots[val].freeBallP1),
        setFreeBallP2(previousShots[val].freeBallP2),
        setFreeBallButtonP1(previousShots[val].freeBallButtonP1),
        setFreeBallButtonP2(previousShots[val].freeBallButtonP2),
        setLongPotP1(previousShots[val].longPotP1),
        setLongPotP2(previousShots[val].longPotP2),
        setBreakP1(previousShots[val].breakP1),
        setBreakP2(previousShots[val].breakP2),
        setCurrentBreakP1(previousShots[val].currentBreakP1),
        setCurrentBreakP2(previousShots[val].currentBreakP2),
        setStatsP1(previousShots[val].statsP1),
        setStatsP2(previousShots[val].statsP2)
        
        setCurrentShotIndex(val)
        setBackwardMode(true)
    }

    useEffect(() => {
        if(!backwardMode){
            if (previousShots.length > 4) {
                setPreviousShots(prev => 
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
                    freeBallP1: freeBallP1,
                    freeBallP2: freeBallP2,
                    freeBallButtonP1: freeBallButtonP1,
                    freeBallButtonP2: freeBallButtonP2,
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
                setPreviousShots(prev => 
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
                    freeBallP1: freeBallP1,
                    freeBallP2: freeBallP2,
                    freeBallButtonP1: freeBallButtonP1,
                    freeBallButtonP2: freeBallButtonP2,
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
        const arr = previousShots
        if (arr.length === 5) {
            setPreviousShots(arr.splice(1,currentShotIndex)
            )
        } else {
            setPreviousShots(arr.splice(0,currentShotIndex+1)
            )
        }
    }

    useEffect(()=> {
        setBreakP1(prev => prev < currentBreakP1 ? currentBreakP1 : prev)
        setBreakP2(prev => prev < currentBreakP2 ? currentBreakP2 : prev)
    }, [currentBreakP1, currentBreakP2])

    const activateBallsP1 = val => {
        setActiveBallsP1({
            '1': val === 1,
            '2': val === 2 || val === 8,
            '3': val === 3 || val === 8,
            '4': val === 4 || val === 8,
            '5': val === 5 || val === 8,
            '6': val === 6 || val === 8,
            '7': val === 7 || val === 8,
        })
    }

    const activateBallsP2 = val => {
        setActiveBallsP2({
            '1': val === 1,
            '2': val === 2 || val === 8,
            '3': val === 3 || val === 8,
            '4': val === 4 || val === 8,
            '5': val === 5 || val === 8,
            '6': val === 6 || val === 8,
            '7': val === 7 || val === 8,
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
                endFrame()
                setExtraBlack(false)
            } else if (p1Points < p2Points) {
                endFrame()
                setExtraBlack(false)
            }
        } else if (remaining === 7) {
            if (p1Points - p2Points > 7 && overlayP1 || p1Points - p2Points > 7 && !overlayP1 && !overlayP2) {
                endFrame()
            } else if (p2Points - p1Points > 7 && overlayP2 || p2Points - p1Points > 7 && !overlayP1 && !overlayP2) {
                endFrame()
            }
        } else if (remaining === 0) {
            if (!extraBlack) {
                if (p1Points > p2Points) {
                    endFrame()
                } else if (p1Points < p2Points) {
                    endFrame()
                } else if (p1Points === p2Points) {
                    setRemaining(7)
                    setExtraBlack(true)
                    setOverlayP1(false)
                    setOverlayP2(false)
                }
            } else {
                if (p1Points > p2Points) {
                    endFrame()
                    setExtraBlack(false)
                } else if (p1Points < p2Points) {
                    endFrame()
                    setExtraBlack(false)
                }
            } 
        }
    }, [statsP1, statsP2])

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
            }
        }
    }, [endOfFrame])

    const mainScoreScreen = <View>
        <ImageBackground style={styles.clothImage} source={cloth}>
        {endModal && <Animated.View style={[styles.mainOverlay, {opacity: fadeAnimModal}]}>
                    <Animated.View style={[styles.endOfFrameContainer, {opacity: fadeAnimModal}]}>
                        <ImageBackground style={styles.backgroundImageModal} source={wood}>
                            <View style={styles.coverSmall}>
                            <Text style={styles.endOfFrameMessageTextHeader}>FRAME HAS ENDED!</Text>
                                <View style={styles.endOfFrameMessage}>
                                    
                                    <View style={styles.resultContainer}>
                                        <View style={{width: '35%'}}>
                                            <Text style={styles.endOfFrameMessageTextName}>{p1Name}</Text>
                                        </View>
                                        <View style={{width: '30%'}}>
                                            <Text style={styles.endOfFrameMessageTextPoints}> {p1Points} : {p2Points} </Text>
                                        </View>
                                        <View style={{width: '35%'}}>
                                            <Text style={styles.endOfFrameMessageTextName}>{p2Name}</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                                <Text style={styles.endOfFrameMessageText}>Please confirm the result:</Text>
                                <View style={styles.buttonsContainer}>
                                    <View style={styles.smallButtonContainerNo}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            if (remaining < 7) {
                                                setShot(previousShots.length-2)
                                            } 
                                            fadeInModal(0)
                                            setTimeout(() => {
                                                setEndModal(false)}, 500)
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.smallButton}>
                                                <Text style={styles.smallButtonText}>GO BACK</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={styles.smallButtonContainerOk}>
                                        <TouchableNativeFeedback
                                        onPress={() => {
                                            finishFrame()
                                        }}
                                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}>
                                            <View style={styles.smallButton}>
                                                <Text style={styles.smallButtonText}>CONFIRM</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </Animated.View>
                </Animated.View>}
        <Animated.View style={[styles.bar, {opacity: fadeBar}]}/>
        {overlayP1 && !proMode ? <View style={styles.overlay}>
                <SwitchButton 
                    setCurrentBreak={setCurrentBreakP2}
                    setFreeBallButtonP1={setFreeBallButtonP1}
                    setFreeBallButtonP2={setFreeBallButtonP2}
                    setFreeBall={setFreeBallP2}
                    setOverlayP1={setOverlayP1}
                    setOverlayP2={setOverlayP2}
                    setRemaining={setRemaining}
                    remaining={remaining}
                    activateBallsP1={activateBallsP1}
                    activateBallsP2={activateBallsP2}
                    setStats={setStatsP1}
                    backwardMode={backwardMode}
                    setBackwardMode={setBackwardMode}
                    setCurrentShotIndex={setCurrentShotIndex}
                    modifyArray={modifyArray}
                    />
            </View> : overlayP1 && <View style={styles.overlay}/>}
        {overlayP2 && !proMode ? <View style={[styles.overlay, {left: Dimensions.get('window').width/2}]}>
                <SwitchButton 
                    setCurrentBreak={setCurrentBreakP1}
                    setFreeBallButtonP1={setFreeBallButtonP1}
                    setFreeBallButtonP2={setFreeBallButtonP2}
                    setFreeBall={setFreeBallP1}
                    setOverlayP1={setOverlayP1}
                    setOverlayP2={setOverlayP2}
                    setRemaining={setRemaining}
                    remaining={remaining}
                    activateBallsP1={activateBallsP1}
                    activateBallsP2={activateBallsP2}
                    setStats={setStatsP2}
                    backwardMode={backwardMode}
                    setBackwardMode={setBackwardMode}
                    setCurrentShotIndex={setCurrentShotIndex}
                    modifyArray={modifyArray}/> 
            </View> : overlayP2 && <View style={[styles.overlay, {left: Dimensions.get('window').width/2}]}/>}
            <View style={{height: 25}}/>
            <ScoreContainer 
                p1Name={p1Name}
                p2Name={p2Name}
                p1Points={p1Points} 
                p2Points={p2Points}
                p1Frames={p1Frames}
                p2Frames={p2Frames}
                remaining={remaining}
                setRemaining={setRemaining}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                setP1Points={setP1Points} 
                setP2Points={setP2Points}
                activateP1={setActiveBallsP1}
                activateP2={setActiveBallsP2}
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                mode={mode}
                setFreeBallP1={setFreeBallP1}
                setFreeBallP2={setFreeBallP2}
                setFreeBallButtonP1={setFreeBallButtonP1}
                setFreeBallButtonP2={setFreeBallButtonP2}
                setLongPotP1={setLongPotP1}
                setLongPotP2={setLongPotP2}
                setBreakP1={setBreakP1}
                setBreakP2={setBreakP2}
                setStatsP1={setStatsP1}
                setStatsP2={setStatsP2}
                previousShots={previousShots}
                setPreviousShots={setPreviousShots}
                currentShotIndex={currentShotIndex}
                setCurrentShotIndex={setCurrentShotIndex}
                backwardMode={backwardMode}
                setBackwardMode={setBackwardMode}
                navigation={props.navigation}
                style={{zIndex: 3}}/>
            <BallContainer 
                setP1Points={setP1Points} 
                setP2Points={setP2Points} 
                activeBallsP1={activeBallsP1}
                activeBallsP2={activeBallsP2}
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                remaining={remaining}
                setRemaining={setRemaining}
                freeBallP1={freeBallP1}
                setFreeBallP1={setFreeBallP1}
                freeBallP2={freeBallP2}
                setFreeBallP2={setFreeBallP2}
                freeBallButtonP1={freeBallButtonP1}
                setFreeBallButtonP1={setFreeBallButtonP1}
                freeBallButtonP2={freeBallButtonP2}
                setFreeBallButtonP2={setFreeBallButtonP2}
                setStatsP1={setStatsP1}
                setStatsP2={setStatsP2}
                setLongPotP1={setLongPotP1}
                longPotP1={longPotP1}
                setLongPotP2={setLongPotP2}
                longPotP2={longPotP2}
                currentBreakP1={currentBreakP1}
                currentBreakP2={currentBreakP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                proMode={proMode}
                backwardMode={backwardMode}
                setBackwardMode={setBackwardMode}
                setCurrentShotIndex={setCurrentShotIndex}
                modifyArray={modifyArray}
                extraBlack={extraBlack}/>
            <MissContainer 
                activateBallsP1={activateBallsP1}
                activateBallsP2={activateBallsP2}
                setOverlayP1={setOverlayP1}
                setOverlayP2={setOverlayP2}
                remaining={remaining}
                setRemaining={setRemaining}
                freeBallP1={freeBallP1}
                setFreeBallP1={setFreeBallP1}
                freeBallP2={freeBallP2}
                setFreeBallP2={setFreeBallP2}
                setFreeBallButtonP1={setFreeBallButtonP1}
                setFreeBallButtonP2={setFreeBallButtonP2}
                setStatsP1={setStatsP1}
                setStatsP2={setStatsP2}
                setLongPotP1={setLongPotP1}
                longPotP1={longPotP1}
                setLongPotP2={setLongPotP2}
                longPotP2={longPotP2}
                setCurrentBreakP1={setCurrentBreakP1}
                setCurrentBreakP2={setCurrentBreakP2}
                backwardMode={backwardMode}
                setBackwardMode={setBackwardMode}
                setCurrentShotIndex={setCurrentShotIndex}
                modifyArray={modifyArray}
                />
            <Animated.View style={[styles.bottomContainer, {transform: [{ translateY: start }]}]}>
                <ImageBackground style={styles.woodImage} source={wood}>
                    <View style={styles.cover}>
                        <SafetyContainer 
                            activateBallsP1={activateBallsP1}
                            activateBallsP2={activateBallsP2}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            setFreeBallP1={setFreeBallP1}
                            setFreeBallP2={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1}
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setStatsP1={setStatsP1}
                            setStatsP2={setStatsP2}
                            setLongPotP1={setLongPotP1}
                            setLongPotP2={setLongPotP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            style={!proMode && {display: 'none'}}
                            />
                        <FoulContainer 
                            setP1Points={setP1Points} 
                            setP2Points={setP2Points} 
                            activateBallsP1={activateBallsP1}
                            activateBallsP2={activateBallsP2}
                            setOverlayP1={setOverlayP1}
                            setOverlayP2={setOverlayP2}
                            remaining={remaining}
                            setRemaining={setRemaining}
                            freeBallP1={freeBallP1}
                            setFreeBallP1={setFreeBallP1}
                            freeBallP2={freeBallP2}
                            setFreeBallP2={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1}
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            setLongPotP1={setLongPotP1}
                            setLongPotP2={setLongPotP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            setStatsP1={setStatsP1}
                            setStatsP2={setStatsP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}/>
                        <AdditionalRedContainer 
                            remaining={remaining}
                            setRemaining={setRemaining}
                            overlayP1={overlayP1}
                            overlayP2={overlayP2}
                            activeBallsP1={activeBallsP1}
                            activeBallsP2={activeBallsP2}
                            setP1Points={setP1Points} 
                            setP2Points={setP2Points} 
                            setStatsP1={setStatsP1}
                            setStatsP2={setStatsP2}
                            freeBallButtonP1={freeBallButtonP1}
                            freeBallButtonP2={freeBallButtonP2}
                            setCurrentBreakP1={setCurrentBreakP1}
                            setCurrentBreakP2={setCurrentBreakP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            setCurrentShotIndex={setCurrentShotIndex}
                            modifyArray={modifyArray}
                            />
                        <ConceideContainer 
                            p1Points={p1Points}
                            p2Points={p2Points}
                            remaining={remaining}
                            endFrame={endFrame}
                            setFreeBallP1={setFreeBallP1}
                            setFreeBallP2={setFreeBallP2}
                            setFreeBallButtonP1={setFreeBallButtonP1}
                            setFreeBallButtonP2={setFreeBallButtonP2}
                            backwardMode={backwardMode}
                            setBackwardMode={setBackwardMode}
                            modifyArray={modifyArray}/> 
                    </View>
                </ImageBackground>
            </Animated.View>  
        </ImageBackground></View>

    const frameOverScreen = <FrameOverScreen 
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
        activateBallsP1={activateBallsP1}
        activateBallsP2={activateBallsP2}
        setFrameRecord={setFrameRecord}
        setEndOfMatch={setEndOfMatch}
        setPreviousShots={setPreviousShots}
        backwardMode={backwardMode}
        setBackwardMode={setBackwardMode}
        setCurrentShotIndex={setCurrentShotIndex}
        setLongPotP1={setLongPotP1}
        setLongPotP2={setLongPotP2}
        startNewFrame={startNewFrame}
        finishFrame={finishFrame}
        /> 

    const gameOverScreen = <GameOverScreen 
        proMode={proMode}
        p1Frames={p1Frames}
        p2Frames={p2Frames}
        p1Name={p1Name}
        p2Name={p2Name}
        statsP1={statsP1}
        statsP2={statsP2}
        successP1={successP1}
        successP2={successP2}
        breakP1={breakP1}
        breakP2={breakP2}
        frameRecord={frameRecord}
        navigation={props.navigation}
        /> 
        
    return (
        <View style={styles.main}>
            {endOfFrame ? frameOverScreen : endOfMatch ?  gameOverScreen : mainScoreScreen}
        </View>
    )
}
 
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
   mainOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center'
   },
   endOfFrameContainer: {
    height: '30%',
    width: '80%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    },
    backgroundImageModal: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverSmall: {
        backgroundColor: 'rgba(60,5,0, 0.6)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
       },
    endOfFrameMessage: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingVertical: 10,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    endOfFrameMessageTextHeader: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        fontSize: 20, 
        marginBottom: 10,
        textAlign: 'center'
    },
    endOfFrameMessageTextName: {
        color: '#fff',
        fontFamily: 'scoreBold',
        fontSize: 16, 
        textAlign: 'center'
    },
    endOfFrameMessageTextPoints: {
        color: '#e0de94',
        fontFamily: 'scoreBold',
        fontSize: 20, 
        textAlign: 'center'
    },
    endOfFrameMessageText: {
        color: '#ddd',
        fontFamily: 'scoreBold',
        fontSize: 16,
        textAlign: 'justify',
        padding: 10
    },
    resultContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    buttonsContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    smallButtonContainerNo: {
        height: 40,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        margin: 5
    },
    smallButtonContainerOk: {
        height: 40,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        margin: 5
    },
    smallButton: {
        height: 40,
        width: 100,
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButtonText: {
        color: '#bbb',
        fontFamily: 'score',
        fontSize: 14,
        textAlign: 'center'
    },
   bar: {
    left:Dimensions.get('window').width/2,
    height: '100%',
    width: 2,
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: 2
   },
   clothImage: {
    height: '100%',
    width: '100%'
    },
   woodImage: {
       borderRadius: 20,
       paddingBottom: 200
   },
   bottomContainer: {
    height: 1000,
    borderRadius: 20,
    borderWidth: 2,
    marginHorizontal: 5,
    overflow: 'hidden'
   },
   cover: {
    height: '100%',
    paddingTop: 3,
    backgroundColor: 'rgba(60,5,0, 0.6)'
   }
})

export default ScoreScreen