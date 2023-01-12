import {
    Flex,
    Box,
    Image,
    Link,
    Heading
}
    from '@chakra-ui/react';
import Layaut from '../components/Layaut';
import Head from 'next/head'


export default function news() {
    return (
        <Layaut>
            <Head>
                <link rel="icon" href="/favico.ico" />
                <title>Novedades</title>
                <meta name='description' content='Pagina de Novedades'></meta>
            </Head>
            <Flex
                align="center"
                //justify="center"
                flex
                mt={20}
                flexDirection={{ base: 'column', md: 'column' }}
            >
                <Heading
                    fontSize={{
                        base: '4xl',
                        md: '5xl',
                    }}>
                    Noticias
                </Heading>
                <Flex flexDirection={{ base: 'column', md: 'row' }} mt={50} gap={20} >
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        bg="white"
                        _dark={{
                            bg: "gray.800",
                        }}
                        maxW="400"
                    >
                        <Image
                            roundedTop="lg"
                            w="full"
                            h={64}
                            fit="cover"
                            src="/noti-inscripciones.png"
                            alt="Article"
                        />
                        <Box p={6}>
                            <Box>
                                <Link
                                    display="block"
                                    color="gray.800"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="bold"
                                    fontSize="2xl"
                                    mt={2}
                                    _hover={{
                                        color: "gray.600",
                                        textDecor: "underline",
                                    }}
                                >
                                    Ingreso 2023
                                </Link>
                                <p
                                    mt={2}
                                    fontSize="sm"
                                    color="gray.600"
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                >
                                    Se encuentra abierta la invitación a instituciones educativas de Nivel Medio para las Charlas Informativas y visitas guiadas sobre el ingreso 2023 destinadas a estudiantes de 5to y 6to año.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        bg="white"
                        _dark={{
                            bg: "gray.800",
                        }}
                        maxW="400"
                    >
                        <Image
                            roundedTop="lg"
                            w="full"
                            h={64}
                            fit="cover"
                            src="/noti-turismo.png"
                            alt="Article"
                        />
                        <Box p={6}>
                            <Box>
                                <Link
                                    display="block"
                                    color="gray.800"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="bold"
                                    fontSize="2xl"
                                    mt={2}
                                    _hover={{
                                        color: "gray.600",
                                        textDecor: "underline",
                                    }}
                                >
                                    Jornadas de Turismo
                                </Link>
                                <p
                                    mt={2}
                                    fontSize="sm"
                                    color="gray.600"
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                >
                                    Se desarrolló la Jornada de Sensibilización organizada por la Secretaría de Turismo de la Municipalidad de Río Cuarto con motivo del Día Mundial del Turismo.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        bg="white"
                        _dark={{
                            bg: "gray.800",
                        }}
                        maxW="400"
                    >
                        <Image
                            roundedTop="lg"
                            w="full"
                            h={64}
                            fit="cover"
                            src="/noti-campagnucci.png"
                            alt="Article"
                        />
                        <Box p={6}>
                            <Box>
                                <Link
                                    display="block"
                                    color="gray.800"
                                    _dark={{
                                        color: "white",
                                    }}
                                    fontWeight="bold"
                                    fontSize="2xl"
                                    mt={2}
                                    _hover={{
                                        color: "gray.600",
                                        textDecor: "underline",
                                    }}
                                >
                                    Convenio con Compagnucci
                                </Link>
                                <p
                                    mt={2}
                                    fontSize="sm"
                                    color="gray.600"
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                >
                                    Nuestra institución firmó un Convenio con la entidad de Servicios Sociales Compagnucci a los fines de extender los beneficios de Formación Técnica Profesional.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Layaut>
    );
}