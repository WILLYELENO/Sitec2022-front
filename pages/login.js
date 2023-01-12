import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle
}
    from '@chakra-ui/react';
import Head from 'next/head'
import Layaut from '../components/Layaut';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

export default function Login() {
    const { login, showAlert, textAlert } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, pass)
    }
    
        return (
            <Layaut>
                <Head>
                    <link rel="icon" href="/favico.ico" />
                    <title>Login</title>
                    <meta name='description' content='Pagina para iniciar sesion'></meta>
                </Head>
             
                {showAlert
                        ?
                        <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{textAlert}</AlertTitle>
                        </Alert>
                        :
                        <Box minH={'48px'} />
                }
                <Flex
                    minH={'70vh'}
                    align={'center'}
                    justify={'center'}
                >
                    <Stack spacing={6} mx={'auto'} maxW={'xl'} minW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Ingresa con tu cuenta</Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}
                        >
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={4} >
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Direccion de e-mail</FormLabel>
                                        <Input
                                            placeholder='ejemplo@itecriocuarto.org.ar'
                                            type="email"
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Contraseña</FormLabel>
                                        <Input
                                            placeholder='************'
                                            type="password"
                                            name='pasword'
                                            value={pass}
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}
                                        >
                                            <Checkbox>Remember me</Checkbox>
                                            <Link color={'blue.400'}>Olvidaste tu contraseña?</Link>
                                        </Stack>
                                        <Button
                                            minWidth={'150px'}
                                            margin={2}
                                            colorScheme='blue'
                                            variant='outline'
                                            onClick={handleSubmit}
                                        >
                                            Iniciar Sesion
                                        </Button>

                                    </Stack>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>
                </Flex>
            </Layaut>
        )
}