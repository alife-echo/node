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
/*
  await User.destroy({
    where:{
       ageUser:{
          [Op.lte] : 18
       }
    }
  })
 
   let users = await User.findAll({
      where:{id:6}
   })
   if(users.length>0){
      let usuario = users[0]
      await usuario.destroy()
   }
   */
   /*
   if(users.length > 0){
       let usuario = users[0]
       usuario.ageUser+=1
       await usuario.save()
   }
   */
/*
   await User.update({nameUser:'Seu Chico',ageUser:25},{
       where:{
         id:4
       }
   })

*/
/*
let users = await User.findOne({ // busca a primeira ocorrencia
    where:{
       ageUser:{
          [Op.gt]:18
       }
    }
})
*/
// let users = await User.findByPk(7) busca pelo id
/*
const [users,created] = await User.findOrCreate({
    where:{
       nameUser:'Bia'
    },
    defaults:{
        nameUser:'Bia',
        ageUser:27
    }
})

if(created){
   console.log('Usuario criado com sucesso')
}
else{
   console.log('Usuario encontrado')
}*/
await User.findOrCreate(
   {where:{
       nameUser:'Richard'
   },
   defaults:{
       ageUser:13
   }
 }
   )
let users = await User.findAll({})
   res.render('pages/home',{
      users
   })
  
})

server.use((req:Request,res:Response)=>{
     res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT)