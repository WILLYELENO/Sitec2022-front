import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useContext(DarkModeContext)

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            colorScheme='blue'
            variant='outline'
        />
    )
}
export default DarkModeSwitch;