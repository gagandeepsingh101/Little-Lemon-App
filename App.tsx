import React from 'react'
import { View } from 'react-native'
import LittleLemonHeader from './components/LittleLemonHeader.tsx'
import LittleLemonFooter from './components/LittleLemonFooter.tsx'
import LittleLemonContent from './components/LittleLemonContent.tsx'

type Props = {}

const App = (props: Props) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#4a5f58"
    }}>
      <LittleLemonHeader />
      <LittleLemonContent />
      <LittleLemonFooter />
    </View>
  )
}

export default App