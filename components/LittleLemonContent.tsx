import React from 'react'
import { ScrollView, Text, View } from 'react-native'

type Props = {}

const LittleLemonContent = (props: Props) => {
    return (
        <View style={{
            flex: 0.75
        }}>
            <ScrollView style={{}}>
                <Text
                    style={{
                        padding: 40,
                        fontSize: 50,
                        color: '#EDEFEE',
                        textAlign: 'center',
                    }}>
                    Welcome to Little Lemon
                </Text>
                <Text
                    style={{
                        fontSize: 38,
                        padding: 20,
                        marginVertical: 8,
                        color: '#EDEFEE',
                        textAlign: 'center',
                    }}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would love
                    to hear more about your experience with us!
                </Text>
            </ScrollView>
        </View>
    )
}
export default LittleLemonContent