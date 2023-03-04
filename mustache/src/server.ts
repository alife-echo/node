import express,{Request,Response} from 'express'
import mustache from 'mustache-express'
import routerMains from './routers/index'
import path from 'path'
const server = express()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())

server.use(express.urlencoded({extended:true})) // pegar os dados do corpo da requisição dentro da rota
//extend:true --> mostra os dados detalhadamente
//POST --> mandar os dados internamente

server.use(routerMains)

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(80)