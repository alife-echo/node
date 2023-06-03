import dotenv from 'dotenv'
import mustacheExpress from 'mustache-express'
import express,{Request,Response} from 'express'
import path from 'path'
import routerMains from './routers/routerMain'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustacheExpress())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))
server.use(routerMains)
server.use((req:Request,res:Response)=>{
    res.status(404).send('Pagina não encontrada')
})
server.listen(process.env.PORT)