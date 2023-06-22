import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <HomeScreen />
    </ChakraProvider>
  )
}

export default App
