import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' })

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function buscarTodasAsNoticias() {
    await esperar(1000)
    const { data } = await api.get('/noticias')
    return data
}

export async function buscarNoticiaPorId(id) {
    await esperar(1000)
    const { data } = await api.get(`/noticias/${id}`)
    return data
}

export async function buscarNoticiasPorCategoria(categoria) {
    await esperar(1000)
    const { data } = await api.get(`/noticias?categoria=${categoria}`)
    return data
}