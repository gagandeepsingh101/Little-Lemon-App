import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {}

const LittleLemonWelcome = (props: Props) => {
    const [feedback, feedbackChange] = useState<string>();
    return (
        <View style={contentStyle.container}>
            <Text
                style={contentStyle.headingStyle}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={contentStyle.titleStyle}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <TextInput value={feedback} onChangeText={feedbackChange} style={contentStyle.feedbackInput} />
        </View>
    )
}
export default LittleLemonWelcome


const contentStyle = StyleSheet.create({
    container: {
        flex: 0.90,
        display: "flex",
        alignItems: "center",
    },
    feedbackInput: {
        backgroundColor: "#ededed",
        width: "80%",
        height: 40,
        paddingHorizontal: 10,
        color: "#333333",
    },
    headingStyle: {
        fontSize: 38,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    titleStyle: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
})