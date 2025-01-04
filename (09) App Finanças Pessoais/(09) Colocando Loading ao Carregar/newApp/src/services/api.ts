import axios from 'axios'

export const api = axios.create({
   // baseURL: 'http://localhost:3333'
   baseURL: '172.23.32.1:3333'
})