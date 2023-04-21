import express,{Request,Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRoutes from './routes/api'
import cors from 'cors'
dotenv.config()

const server = express()

server.use(cors({
      origin:'https://resttesttest.com',
      methods:['GET']
}))

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.listen(process.env.PORT)

server.use('/api',apiRoutes)

server.use((req:Request,res:Response)=>{
     res.status(404)
     res.json({error:'Endpoint não encontrado'})
})