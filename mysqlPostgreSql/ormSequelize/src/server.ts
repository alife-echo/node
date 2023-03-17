import express,{Request,Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import {sequelize} from '../src/instances/mysql'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.get('/', async (req:Request,res:Response)=>{
     
    try{
      await sequelize.authenticate()
      console.log('Conexão estabelecida com sucesso')
      res.send('<h1> olá menor </h1>')
    }
    catch (error){
        console.log('Deu error',error)
    }
  
})

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT)