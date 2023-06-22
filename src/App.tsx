import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <ChakraProvider>
      <HomeScreen />
    </ChakraProvider>
  )
}

export default App
