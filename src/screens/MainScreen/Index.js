import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Index</Text>
            <TouchableOpacity
                style={{ alignSelf: 'center', marginVertical: '10%', backgroundColor: '#91d2bb', paddingVertical: '3%', paddingHorizontal: '6%', borderRadius: 10 }}
                onPress={() => navigation.goBack()}>
                <Text>Go Back!</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, text: { fontSize: 25 }
})