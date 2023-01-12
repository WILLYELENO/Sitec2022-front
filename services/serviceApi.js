import { serviceMock } from "./serviceMock"
const useMock = false

const validUsers = async (email, password) => {
    if (useMock) {
        const data = await serviceMock.login(email)
        return data
    }
    else {
        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            return data
        }
        catch (e) {
            const serverDown = 'No server Available'
            return serverDown
        }
    }
}

const getMaterias = async () => {
    if (useMock) {
        const data = await serviceMock.materias()
        return data
    }
    else {
        try {
            const res = await fetch('http://localhost:5000/materias', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            return data
        }
        catch (e) {
            return null
        }
    }
}

export const serviceApi = {
    validUsers,
    getMaterias
}