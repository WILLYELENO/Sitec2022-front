import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    useColorModeValue,
    VisuallyHidden,
    Image
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

const Logo = () => {
    return (
        <Image alt='' src={'/logoitec.png'} boxSize='15%' p={2} />
    );
};
const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Foother() {
    const { texts } = useContext(LanguageContext)
    return (
        <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>

                    <Link href={'#'}>{texts.Inicio}</Link>
                    <Link href={'#'}>{texts.Acerca}</Link>
                    <Link href={'#'}>{texts.Contacto}</Link>
                </Stack>
            </Container>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'row', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'center' }}
                    align={{ base: 'center', md: 'center' }}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Container>
            </Box>
        </Box>

    );
}