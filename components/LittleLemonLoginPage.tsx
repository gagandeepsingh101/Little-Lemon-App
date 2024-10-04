import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {}

const LittleLemonLoginPage = (props: Props) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
        <View style={loginPageStyle.container}>
            <Text style={loginPageStyle.headingStyle}>Welcome to Little Lemon</Text>
            <Text style={loginPageStyle.titleStyle}>{isLogin ? "Welcome to Login Page" : "Login to Contiue"}</Text>
            {!isLogin && <>
                <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={loginPageStyle.textInput} />
                <TextInput secureTextEntry maxLength={8} value={password} onChangeText={setPassword} placeholder='Password' style={loginPageStyle.textInput} />
                <Pressable style={loginPageStyle.loginButton} onPress={() => {
                    if (email !== "" && password !== "") {
                        setIsLogin(!isLogin)
                    }
                }} >
                    <Text style={loginPageStyle.loginButtonText}>Login</Text>
                </Pressable >
            </>
            }
        </View>
    )
}

const loginPageStyle = StyleSheet.create({
    container: {
        flex: 0.90,
        display: "flex",
        alignItems: "center",
    },
    textInput: {
        marginVertical: 10,
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
    },
    loginButton: {
        backgroundColor: "#EE9972",
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginVertical:20
    },
    loginButtonText: {
        fontSize: 28,
        color: '#EDEFEE',
    }
})
export default LittleLemonLoginPage