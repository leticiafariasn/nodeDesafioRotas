import http from 'node:http'

const users = []
const products = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method === 'GET' && url === '/users') {
        return res
        .setHeaders('content-type','application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            nome: 'Letícia Farias',
        })
        
        return res.end('Criação de Usuário')
    }

    if (method === 'PATCH') {
        products.push({
            produto: 'Notebook'
        })
        return res
    }
    
    return res.end('Página Inicial')
})

server.listen(3333)