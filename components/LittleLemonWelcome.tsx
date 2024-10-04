import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {}

const LittleLemonWelcome = (props: Props) => {
    const [feedback, feedbackChange] = useState<string>();
    return (
        <View style={contentStyle.container}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 20,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Image srcSet='https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/l3LRmnWpSFSDyuylevA5rA_6621941b83554dbc8d73f47599f91ba1_Image-1.png?expiry=1728172800000&hmac=S7Lp9T3N7EnIFMFuvgDvqJJmNTHYuUAQb922QLs23kY'
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                    style={{
                        width: 100,
                        height: 100
                    }} />
                <Text
                    style={contentStyle.headingStyle}>
                    Little Lemon
                </Text>
            </View>
            <Text
                style={contentStyle.titleStyle}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            {/* <TextInput value={feedback} onChangeText={feedbackChange} style={contentStyle.feedbackInput} /> */}
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