import { 
    ImageBackground, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Image } from 'react-native'
import React from 'react'

function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/start.png")}
        >
            <TouchableWithoutFeedback onPress={() }>
                <Image 
                    style={styles.playButton}
                    source={require('../assets/PLAY.png')}/>

            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: '61.6%',
    },
    playButton: {
        top: 525,
    },
});


export default WelcomeScreen;