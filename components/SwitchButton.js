import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';

const SwitchButton = props => {
    return (<View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            props.stats(prev => ({
                                ...prev,
                                long: prev.long + 0
                            }))
                            props.setCurrentBreak(0)
                            props.setFreeBP1(true)
                            props.setFreeBP2(true)
                            props.setFreeBall(false)
                            if (props.remaining === 34) {
                                props.activateP1({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                                props.setRemaining(props.remaining - 7)
                            } else if (props.remaining > 27){
                                props.activateP1({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': false,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 27) {
                                props.activateP1({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': false,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 25) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': false,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': false,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 22) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': false,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': false,
                                    '5': true,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 18) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': false,
                                    '6': true,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': false,
                                    '6': true,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 13) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': false,
                                    '7': true})
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': false,
                                    '7': true})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } else if (props.remaining === 7) {
                                props.activateP1({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': false})
                                props.activateP2({
                                    '1': true,
                                    '2': true,
                                    '3': true,
                                    '4': true,
                                    '5': true,
                                    '6': true,
                                    '7': false})
                                props.setOverlayP1(prev => !prev)
                                props.setOverlayP2(prev => !prev)
                            } 
                        }}
                        background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.8)', true)}
                        >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>SWITCH PLAYERS</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>)
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 90,
        width: 120,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderWidth: 3,
       },
       button: {
        height: 90,
        width: 120,
        borderRadius: 25,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
       },
       buttonText: {
        fontFamily: 'scoreBold',
        fontSize: 20,
        paddingHorizontal: 5,
        textAlign: 'center'
       }
})

export default SwitchButton