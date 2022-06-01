import { View, Text, SafeAreaView, Image, ScrollView, useWindowDimensions, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { imgPath } from '../../utils/imagePath'
import axios from 'axios'
import styles from './styles'

const LoginScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        axios.post('http://tidy4medevelop-env.eba-izti9tws.us-west-1.elasticbeanstalk.com/users/login', {
            email,
            password
        }).then((res) => {
            if (res.data.message === 'Login Successfully.') {
                console.log('running')
                navigation.navigate('MainScreen')
            } else { }
        }).catch(err => { Alert.alert('Wrong credentials and error ') })
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <Image resizeMode='stretch' source={imgPath.TopOverLayOut} style={styles.imgTopOverLayOut} />
                <Image resizeMode='contain' source={imgPath.logo} style={styles.logo} />
                <View style={styles.ViewText}>

                    <Text style={styles.ViewTexttxt}>Log in with:</Text>
                </View>
                <View style={styles.socialBtnView}>
                    <TouchableOpacity style={styles.socialBtnViewBtn}>
                        <Image source={imgPath.facebookLogo} style={styles.socialBtnViewBtnImg} />
                        <Text style={styles.socialBtnViewBtnText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBtnViewBtn}>
                        <Image source={imgPath.GoogleLogo} style={styles.socialBtnViewBtnImg} />
                        <Text style={styles.socialBtnViewBtnText}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineView}>
                    <View
                        style={styles.line}
                    />
                    <Text style={styles.lineViewText}>Or</Text>
                    <View
                        style={styles.line}
                    />
                </View>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text style={styles.KeyboardAvoidingViewText}>Email or phone</Text>
                    <View style={styles.ViewTextInput}>
                        <TextInput
                            onChangeText={(e) => setEmail(e)}
                            style={styles.imgTopOverLayOut}
                            placeholder='Enter your email or phone number'
                        />
                    </View>
                    <Text style={[styles.KeyboardAvoidingViewText, { marginTop: height * 0.02 }]}>Password</Text>
                    <View style={styles.ViewTextInput}>
                        <TextInput
                            onChangeText={(e) => setPassword(e)}
                            style={styles.imgTopOverLayOut}
                            placeholder='Enter your password'
                            secureTextEntry={true}
                        />
                    </View>
                </KeyboardAvoidingView>
                <Text style={styles.forgotPassText}>Forgot password</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        style={[styles.btnViewTouch, { backgroundColor: '#91d2bb' }]}>
                        <Text style={styles.btnViewTouchText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnViewTouch, { backgroundColor: '#ffffff' }]}>
                        <Text style={styles.btnViewTouchText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen