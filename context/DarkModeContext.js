import { createContext } from "react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Global, css } from '@emotion/react'

const DarkModeContext = createContext({});

export function DarkModeProvider({ children }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <DarkModeContext.Provider
      value={{ colorMode, toggleColorMode, useColorModeValue }}
    >
      <Global
        styles={css`
            ::selection {
              background-color: #90CDF4;
              color: #fefefe;
            }
            ::-moz-selection {
              background: #ffb7b7;
              color: #fefefe;
            }
            html {
              min-width: 356px;
              scroll-behavior: smooth;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              background: ${colorMode === 'light' ? 'white' : '#171717'};
            }
          `}
      />
      {children}
    </DarkModeContext.Provider>
  )
}


export default DarkModeContext;