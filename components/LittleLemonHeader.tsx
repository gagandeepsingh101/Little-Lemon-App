import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const LittleLemonHeader = (props: Props) => {
    return (
        <View style={headerStyle.bgStyle}>
            <Text style={headerStyle.textStyle}>Little Lemon</Text>
        </View>)
}

export default LittleLemonHeader

const headerStyle = StyleSheet.create({
    bgStyle: {
        backgroundColor: "#f3d032",
        width: "100%",
        height: "7%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: "black",
        fontSize: 30,
        fontWeight: "900",
    }
})