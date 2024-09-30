import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const LittleLemonFooter = (props: Props) => {
    return (
        <View style={footerStyle.bgStyle}>
            <Text style={footerStyle.textStyle} >All rights reserved by Little Lemon, 2022</Text>
        </View>
    )
}

const footerStyle = StyleSheet.create({
    bgStyle: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#f3d032",
        width: "100%",
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
    }
})

export default LittleLemonFooter;