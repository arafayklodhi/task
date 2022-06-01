import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { imgPath } from '../../utils/imagePath'


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginScreen');
        }, 3000);
    }, []);
    return (
        <ImageBackground source={imgPath.SplashScreen} resizeMode={'stretch'} style={{ flex: 1 }}>
            {/* <Text>SplashScreen</Text> */}
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
            />
        </ImageBackground>
    )
}

export default SplashScreen