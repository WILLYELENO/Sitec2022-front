import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Image
} from '@chakra-ui/react';
import {
    FiMenu,
    FiChevronDown,
} from 'react-icons/fi';
import { useContext } from 'react';
import NextLink from 'next/link'
import DarkModeSwitch from './DarkModeSwitch';
import Foother from './Foother';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router'
import LanguageSwitch from './LanguageSwitch';
import LanguageContext from '../context/LanguageContext';
import DarkModeContext from '../context/DarkModeContext';

export default function Layaut({ children, }) {
    const {useColorModeValue} = useContext(DarkModeContext)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <><Box
            minH="100vh"
            bg={useColorModeValue('gray.200', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }} />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box><Foother /></>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const { texts } = useContext(LanguageContext)
    const {useColorModeValue} = useContext(DarkModeContext)
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('orange.50', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex alignItems="center" justifyContent="space-between">
                <Image alt='' display={{ base: 'none', md: 'flex' }} src={'/logoitec.png'} boxSize='90%' p={7} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Flex alignItems="center" flexDirection="column" spacing={3}>
                <NextLink href='/'>
                    <Button
                        minWidth={'150px'}
                        margin={2}
                        colorScheme='blue'
                        variant='outline'
                    >
                        {texts.Inicio}
                    </Button>
                </NextLink>
                <NextLink href='/contact'>
                    <Button
                        minWidth={'150px'}
                        margin={2}
                        colorScheme='blue'
                        variant='outline'
                    >
                        {texts.Contacto}
                    </Button>
                </NextLink>
                <NextLink href='/news'>
                    <Button
                        minWidth={'150px'}
                        margin={2}
                        colorScheme='blue'
                        variant='outline'
                    >
                        {texts.Novedades}
                    </Button>
                </NextLink>
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    const { state, logout } = useContext(AuthContext)
    const {useColorModeValue} = useContext(DarkModeContext)
    const { texts } = useContext(LanguageContext)

    const route = useRouter()

    function redirect() {
        route.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        logout()
        redirect()
    }

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            alignItems="center"
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('orange.50', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <DarkModeSwitch />
            <LanguageSwitch />
            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    {state.isLoged
                        ?
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://bit.ly/broken-link'
                                        }
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="sm">{state.userData}</Text>
                                        <Text fontSize="xs" >
                                            Estudiante
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={'white'}
                                >
                                <MenuItem onClick={handleSubmit}>
                                    {texts.CerrarSesion}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        :
                        <NextLink href='/login'>
                            <Button
                                minWidth={'150px'}
                                margin={2}
                                colorScheme='blue'
                                variant='solid'
                            >
                                {texts.IniciarSesion}
                            </Button>
                        </NextLink>
                    }
                </Flex>
            </HStack>
        </Flex>
    );
};