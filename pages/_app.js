import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import { LanguageProvider } from '../context/LanguageContext'
import { DarkModeProvider } from '../context/DarkModeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <AuthProvider>
        <LanguageProvider>
          <DarkModeProvider>
            <Component {...pageProps} />
          </DarkModeProvider>
        </LanguageProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp