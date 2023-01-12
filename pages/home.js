import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Heading
} from '@chakra-ui/react'
import Head from 'next/head'
import Layaut from "../components/Layaut";
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router'
import TableMats from '../components/TablaMaterias';


export default function Home() {
  const { state } = useContext(AuthContext)
  const route = useRouter()
  if (state.isLoged === true) {
    return (
      <Layaut>
        <Head>
          <link rel="icon" href="/favico.ico" />
          <title>Materias</title>
          <meta name='description' content='Pagina home con informacion privada de cada alumno'></meta>
        </Head>
        <Flex
          minH={'20vh'}
          align={'center'}
          justify={'center'}
        >
          <Heading fontSize={'4xl'}>Tus Materias</Heading>
        </Flex>
        <TableMats />
      </Layaut>
    )

  }
  else {
    setTimeout(function redirect() {
      route.push('/')
    }, 5000)
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error de Credenciales</AlertTitle>
        <AlertDescription>Para acceder a esta página debe estar logueado!</AlertDescription>
      </Alert>
    )
  }
}