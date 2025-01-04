import axios from 'axios'

export const api = axios.create({
   // baseURL: 'http://localhost:3333'
   baseURL: '192.168.56.1:3333'
})