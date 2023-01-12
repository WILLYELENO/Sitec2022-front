import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Layaut from '../components/Layaut';
import { useContext } from 'react'
import Head from 'next/head'
import DarkModeContext from '../context/DarkModeContext';

export default function Contact() {
  const {useColorModeValue} = useContext(DarkModeContext)

  return (
    <Layaut>
      <Head>
        <link rel="icon" href="/favico.ico" />
        <title>Contacto</title>
        <meta name='description' content='Pagina de contacto'></meta>
      </Head>
      <Flex
        mt={'-50'}
        align="center"
        justify="center"
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Contactanos
            </Heading>
            <Stack
              spacing={{ base: 4, md: 8, lg: 10 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    isRound
                  />
                </Tooltip>
                <Link href="#">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    isRound
                  />
                </Link>
                <Link href="#">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    isRound
                  />
                </Link>
                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white','gray.600')}
                borderRadius="lg"
                minW={'800px'}
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <InputGroup>
                      <InputLeftElement/>
                      <Input type="text" name="name" placeholder="Tu Nombre" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement/>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Tu Email"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Tu Mensaje"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
                  <Button
                    minWidth={'150px'}
                    margin={2}
                    colorScheme='blue'
                    variant='outline'
                    isFullWidth>
                    Enviar Mensaje
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Flex>
    </Layaut>
  );
}