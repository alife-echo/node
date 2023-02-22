import express,{Request,Response } from "express";
import path from "path";
import mainRoutes from './routers/index'
import routerPainel from './routers/painel'
const server = express()

//__dirname = especifica em qual diretorio estou,seguindo o arquivo onde foi declarado
console.log(path.join(__dirname,'../public'))

server.use('/static',express.static(path.join(__dirname,'../public')))
server.use(mainRoutes)
server.use('/painel',routerPainel)

server.use((req:Request,res:Response)=>{
   res.status(404).send('Página não encontrada!') 
})

/*
server.get('/',(req:Request,res:Response)=>{
     res.send('Olá')
})



server.get('/voo/:origem-:destino',(req:Request,res:Response)=>{
    let {origem,destino} = req.params
    res.send(`Procurando voos  de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})
*/

/*
 server.get('rota',(pedido servidor,resposta servidor)=>{
     resposta.send('mensagem que sera enviada para o usuario')
 }) 

*/

// GET = REQUISIÇÃO PARA ACESSAR ALGO
// POST = REQUISIÇÃO PARA MANDAR ALGO PARA O SERVIDOR
// GET , POST , PUT , DELETE

server.listen(80)