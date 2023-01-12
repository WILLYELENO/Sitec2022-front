import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Button,
  useColorModeValue,
  Container,
  Stack
} from '@chakra-ui/react';

const CardSoftware = () => {
  return (
    <Container maxW={'7xl'} p='12'>
      <Stack
        align={'center'}
        py={{ base: 15, md: 15 }}
        direction={{ base: 'column', md: 'row' }}>
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'>
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius='lg'
                src={'/software.png'}
                alt='some good alt text'
                objectFit='contain'
              />
            </Link>
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              Electromecanica
            </Link>
          </Heading>
          <br />
          <br />
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize='lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <br />
          <br />
          <Button
            minWidth={'150px'}
            margin={2}
            colorScheme='blue'
            variant='outline'
            maxWidth={'150'}
          >
            Mas Informacion
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default CardSoftware;