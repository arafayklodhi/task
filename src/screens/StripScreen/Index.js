import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import axios from 'axios'


const StripScreen = () => {
    const stripe = useStripe();
    const [name, setName] = useState('')
    const [amount, setamount] = useState()
    const [currency, setcurrency] = useState('')

    const submit = async () => {
        // const response = axios.get('https://localhost:4000').then((res) => console.log(res.data))
        // console.log(response)
        try {
            const response = await fetch('http://10.0.2.2:4000/create-payment-intent', {
                method: 'POST',
                body: JSON.stringify({ name, amount, currency }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            // console.log(data, '<=========data')
            if (!response.ok) return Alert.alert(data.message);
            const clientSecret = data.clientSecret;
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSheet: clientSecret
            });
            if (initSheet.error) return Alert.alert(initSheet.error.message)
            const presentSheet = stripe.presentPaymentSheet({
                clientSecret
            })
            if (presentSheet.error) return Alert.alert(presentSheet.error.message)
            Alert.alert('Payment Successfully Done')
        } catch (error) {
            console.error(error);
            Alert.alert('Something gone Wrong')
        }
        // await axios.get('http://10.0.2.2:4000').then((res) => console.log(res))
        console.log('rafay')
    }

    return (
        <SafeAreaView>
            <View style={{ alignSelf: 'center', backgroundColor: 'gray' }}>
                <TextInput style={{ marginVertical: 7, backgroundColor: 'red' }} placeholder='Enter your Name' onChangeText={(e) => setName(e)} />
                <TextInput style={{ marginVertical: 7, backgroundColor: 'red' }} placeholder='Enter your Amount' onChangeText={(e) => setamount(parseInt(e))} />
                <TextInput style={{ marginVertical: 7, backgroundColor: 'red' }} placeholder='Enter your Currency' onChangeText={(e) => setcurrency(e)} />
            </View>

            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                }}
                onCardChange={(cardDetails) => {
                    console.log('cardDetails', cardDetails);
                }}
                onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                }}
            />
            <TouchableOpacity
                onPress={() => submit()}
                style={{ alignSelf: 'center', width: '90%', justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 10, backgroundColor: 'green' }}>
                <Text>Mjhe Duba bey!</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default StripScreen