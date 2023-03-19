import express,{Request,Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
//import {sequelize} from '../src/instances/mysql'
import { User } from './models/User'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.get('/', async (req:Request,res:Response)=>{
  try {
    let users = await User.findAll() 
    
    res.render('pages/home',{
       users
    })
  }
  catch(error){
    console.log(error)
  }
  
})

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT)