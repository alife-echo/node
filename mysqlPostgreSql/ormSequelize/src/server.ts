import express,{Request,Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
//import {sequelize} from '../src/instances/mysql'
import { User } from './models/User'
import { Op, WhereOptions } from 'sequelize'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.get('/', async (req:Request,res:Response)=>{

   /* build + save
    const user = User.build({
       nameUser:'Karine',
       ageUser:25
    })
   // await user.save()
    console.log(user.name)

    */
//crate
/*
    const user = await User.create({
       nameUser:'Ciclano',
       ageUser:39
    })
    console.log(user.dataValues.nameUser)
    res.render('pages/home',{
      
    })
  
*/

   let users = await User.findAll({
      where:{
         id:7
      }
   })
   if(users.length > 0){
       let usuario = users[0]
       usuario.ageUser+=1
       await usuario.save()
   }
/*
   await User.update({nameUser:'Seu Chico',ageUser:25},{
       where:{
         id:4
       }
   })

*/

   res.render('pages/home',{
      users
   })
  
})

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT)