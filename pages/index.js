import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Layaut from "../components/Layaut";
import CardSoftware from '../components/CardSoftware';
import Banner from '../components/Banner';
import CardTurismo from '../components/CardTurismo';
import CardElectro from '../components/CardElectro';

export default function index() {
  return (
    <Layaut>
      <Head>
        <link rel="icon" href="/favico.ico" />
        <title>Index</title>
        <meta name='description' content='Pagina de inicio'></meta>
      </Head>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'column' }}>
        <Banner />
        <CardSoftware />
        <CardTurismo />
        <CardElectro />
      </Stack>
    </Layaut>
  )
}