import React, { useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback, Animated } from 'react-native';
 
const MissContainer = ({activateBallsP1, activateBallsP2, setOverlayP1, setOverlayP2, remaining, setRemaining,
    freeBallP1, setFreeBallP1, freeBallP2, setFreeBallP2, setFreeBallButtonP1, setFreeBallButtonP2, setStatsP1, setStatsP2,
    setLongPotP1, longPotP1, setLongPotP2, longPotP2, setCurrentBreakP1, setCurrentBreakP2, backwardMode, setBackwardMode,
    setCurrentShotIndex, modifyArray}) => {

    const miss = p => {
        if (backwardMode) {
            modifyArray()
            setBackwardMode(false)
        }
        setCurrentShotIndex(4)
        setCurrentBreakP1(0)
        setCurrentBreakP2(0)
        if (p === 1) {
            if (longPotP1) {
                setStatsP1(prev => ({
                    ...prev,
                    miss: prev.miss+1,
                    longMiss: prev.longMiss+1
                }))
            } else {
            setStatsP1(prev => ({
                ...prev,
                miss: prev.miss+1
            }))}
            setLongPotP1(false)
            setFreeBallButtonP1(false)
            setFreeBallButtonP2(false)
            setFreeBallP1(false)
        } else {
            if (longPotP2) {
                setStatsP2(prev => ({
                    ...prev,
                    miss: prev.miss+1,
                    longMiss: prev.longMiss+1
                }))
            } else {
            setStatsP2(prev => ({
                ...prev,
                miss: prev.miss+1
            }))}
            setLongPotP2(false)
            setFreeBallButtonP1(false)
            setFreeBallButtonP2(false)
            setFreeBallP2(false)
        }
        if (remaining === 34) {
            activateBallsP1(1)
            activateBallsP2(1)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
            setRemaining(remaining - 7)
        } else if (remaining > 27 && (remaining - 27)%8 === 0){
            activateBallsP1(1)
            activateBallsP2(1)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining > 27 && (remaining - 27)%8 !== 0) {
            activateBallsP1(1)
            activateBallsP2(1)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
            if (p === 1 && !freeBallP1 || p === 2 && !freeBallP2){
                setRemaining(remaining - 7)
            }
        } else if (remaining === 27) {
            activateBallsP1(2)
            activateBallsP2(2)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 25) {
            activateBallsP1(3)
            activateBallsP2(3)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 22) {
            activateBallsP1(4)
            activateBallsP2(4)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 18) {
            activateBallsP1(5)
            activateBallsP2(5)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 13) {
            activateBallsP1(6)
            activateBallsP2(6)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } else if (remaining === 7) {
            activateBallsP1(7)
            activateBallsP2(7)
            setOverlayP1(p === 1)
            setOverlayP2(p === 2)
        } 
    }

const fadeSectionLeft = useRef(new Animated.Value(0)).current
const fadeSectionRight = useRef(new Animated.Value(0)).current

const fadeSectionAnim = (anim, del) => {
    Animated.timing(anim, {
      toValue: 1,
      delay: del,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    fadeSectionAnim(fadeSectionLeft, 3000)
    fadeSectionAnim(fadeSectionRight, 3500)
  }, [])

    return (
        <View style={styles.main}>
            <Animated.View style={[styles.missButtonContainer, {opacity: fadeSectionLeft}]}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            miss(1)
                        }}
                            
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText}>MISS</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Animated.View>
            <Animated.View style={[styles.missButtonContainer, {opacity: fadeSectionRight}]}>
                <View style={styles.missButton}>
                    <TouchableNativeFeedback
                         onPress={() => {
                            miss(2)
                         }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.miss}>
                            <Text style={styles.buttonText} >MISS</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Animated.View>
        </View>
    )}
 
const styles = StyleSheet.create({
    main: {
        height: Dimensions.get('window').height <= 740 ? 55 : 75,
        width: '100%',
        flexDirection: 'row'
    },
    missButtonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    missButton: {
        height: '65%',
        width: '55%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 17, 0,0.7)'
    },
    miss: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'scoreBold',
        fontSize: Dimensions.get('window').height <= 740 ? 18 : 20
    }
})
 
export default MissContainer