import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

type Props = {}

const LittleLemonContent = (props: Props) => {
    return (
        <View style={contentStyle.container}>
            <ScrollView style={contentStyle.scrollContainer}>
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
            </ScrollView>
        </View>
    )
}
export default LittleLemonContent


const contentStyle = StyleSheet.create({
    container: {
        flex: 0.90
    },
    scrollContainer: {
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