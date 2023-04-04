import express,{Request,Response} from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from 'dotenv'
import routerMains from './routers/index'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
express.urlencoded({extended:true})

server.use(routerMains)

server.use((req:Request,res:Response)=>{
     res.status(404).send('<h1>Pagina não encontrada</h1>')
})

server.listen(process.env.PORT)