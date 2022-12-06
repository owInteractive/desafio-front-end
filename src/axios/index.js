import axios from 'axios'

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json',    
})
    
export default api