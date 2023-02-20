import express,{Request,Response } from "express";
const server = express()

server.get('/',(req:Request,res:Response)=>{
     res.send('Olá')
})



server.get('/voo/:origem-:destino',(req:Request,res:Response)=>{
    let {origem,destino} = req.params
    res.send(`Procurando voos  de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})


/*
 server.get('rota',(pedido servidor,resposta servidor)=>{
     resposta.send('mensagem que sera enviada para o usuario')
 }) 

*/

// GET = REQUISIÇÃO PARA ACESSAR ALGO
// POST = REQUISIÇÃO PARA MANDAR ALGO PARA O SERVIDOR
// GET , POST , PUT , DELETE

server.listen(80)