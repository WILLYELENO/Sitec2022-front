async function login(email) {
    return { user: { name: email }, accessToken: '123456789' }
}

async function materias() {
    return [
        {
            "id": 1,
            "name": "Programación 3",
            "duration": "1 año",
            "code": 13,
            "profesor": "Fernando Muñoz"
        },
        {
            "id": 2,
            "name": "Programación 2",
            "duration": "1 año",
            "code": 10,
            "profesor": "Mauricio Sambrenil"
        },
        {
            "id": 3,
            "name": "Programación 1",
            "code": 4,
            "duration": "1 año",
            "profesor": "Pablo Kaniefski"
        },
        {
            "id": 4,
            "name": "Matemática y Lógica",
            "code": 1,
            "duration": "1 año",
            "profesor": "Pablo Bunader"
        },
        {
            "id": 5,
            "name": "Sistemas y Organizaciones",
            "code": 2,
            "duration": "1 año",
            "profesor": "María José Muñoz"
        },
        {
            "id": 6,
            "name": "Arquitectura de las Computadoras",
            "code": 3,
            "duration": "1 año",
            "profesor": "Jorge Sosa"
        },
        {
            "id": 7,
            "name": "Inglés",
            "code": 5,
            "duration": "1 año",
            "profesor": "Pedro Lemo"
        },
        {
            "id": 8,
            "name": "Lengua y Comunicación",
            "code": 6,
            "duration": "1 año",
            "profesor": "ariadna Pomini"
        },
        {
            "id": 9,
            "name": "Sistemas Operativos",
            "code": 7,
            "duration": "1 año",
            "profesor": "Jorge Sosa"
        },
        {
            "id": 10,
            "name": "Matemática Aplicada",
            "code": 8,
            "duration": "1 año",
            "profesor": "Jorge Sosa"
        }
    ]
}

export const serviceMock = {
    login,
    materias
}