'use client'
import { extendBaseTheme, ChakraBaseProvider } from '@chakra-ui/react'
import ChakraTheme from '@chakra-ui/theme'
import { ChakraProvider } from '@chakra-ui/react'

const {Button} = ChakraTheme.components

const theme = {
    components: {
        Button
    }
}

export default function ChakraComponentProvider({children}: any) {
    return <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
}