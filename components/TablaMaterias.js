import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { serviceApi } from '../services/serviceApi';

function TableMats() {
    const [Materias, setMaterias] = useState([])
    
    const consultaMaterias = async () => {
        const response = await serviceApi.getMaterias()
        setMaterias(response)
    }

    useEffect(() => {
        consultaMaterias()
    },[])
     console.log(Materias)
    return (
        <TableContainer>
            <Table variant='simple' >
                <Thead>
                    <Tr size={{ base: '24px', md: '40px', sm: '30px', lg: '56px' }}>
                        <Th>Nombre</Th>
                        <Th>Codigo</Th>
                        <Th>Profesor</Th>
                        <Th>Duración</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {Materias.map((item) => {
                        return <Tr key={Materias.id}>
                            <Td>{item.name}</Td>
                            <Td>{item.code}</Td>
                            <Td>{item.profesor}</Td>
                            <Td>{item.duration}</Td>
                        </Tr>
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
export default TableMats;