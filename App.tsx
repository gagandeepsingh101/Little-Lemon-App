import React from 'react'
import { StyleSheet, View } from 'react-native'
import LittleLemonHeader from './components/LittleLemonHeader.tsx'
import LittleLemonFooter from './components/LittleLemonFooter.tsx'
import LittleLemonContent from './components/LittleLemonContent.tsx'

type Props = {}

const App = (props: Props) => {
  return (
    <View style={mainStyle.mainContainerStyle}>
      <LittleLemonHeader />
      <LittleLemonContent />
      <LittleLemonFooter />
    </View>
  )
}

export default App

const mainStyle = StyleSheet.create({
  mainContainerStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333"
  }
})