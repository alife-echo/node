import express,{Request,Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
//import {sequelize} from '../src/instances/mysql'
import { User } from './models/User'
import { Op } from 'sequelize'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.get('/', async (req:Request,res:Response)=>{
  try {
    let users = await User.findAll({
      // attributes:['nameUser','ageUser'],--> pegar colunas especificas
      attributes:{exclude:['id']}, // --> não pegar a coluna,
      //where:{nameUser:'Paulo',ageUser:55} // --> condicional quero apenas a linha com o nome usuario Paulo e que tenha 55 anos
      where:{
        [Op.or]:[
            {ageUser:55},
            {ageUser:30}
            //{nameUser:'Paulo'}
        ],
        /*
        ageUser:{ 
          [Op.or]:[30,55]  --> outra forma
        }
        */
       
      }
    }) 
    console.log(users)
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