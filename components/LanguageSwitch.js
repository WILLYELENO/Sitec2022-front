import { useContext } from "react";
import LanguageContext from '../context/LanguageContext'
import { Box, Select, useColorModeValue } from '@chakra-ui/react'

const LanguageSwitch = () => {
    const { handleLanguage } = useContext(LanguageContext);

    return (
        <Box
            maxWidth={'100px'}
            minW={'70px'}
        >
            <Select
                borderColor={useColorModeValue('blue.600', 'blue.200')}
                color={useColorModeValue('blue.600', 'blue.200')}
                name="language"
                onChange={handleLanguage}
            >
                <option value="es">ES</option>
                <option value="en">EN</option>
            </Select>
        </Box>
    )
}
export default LanguageSwitch;
