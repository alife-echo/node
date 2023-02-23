import express,{Request,Response} from 'express'
import mustache from 'mustache-express'
import routerMains from './routers/index'
import path from 'path'

const server = express()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(routerMains)

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(80)