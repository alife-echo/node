import express,{Request,Response} from 'express'
import mustache from 'mustache-express'
import routerMains from './routers/index'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const server = express()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())

server.use(express.urlencoded({extended:true}))

server.use(routerMains)

server.use((req:Request,res:Response)=>{
     res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT)