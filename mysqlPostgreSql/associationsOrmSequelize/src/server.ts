import express,{Request,Response} from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'
import { Product } from './models/Product'
import { Manufacturer } from './models/Manufacturer'
import {sequelize} from './instances/mysql'

dotenv.config()
const app = express()
//sequelize.sync({force:true})
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','mustache')
app.engine('mustache',mustacheExpress())
app.use(express.static(path.join(__dirname,'../public')))



app.get('/', async (req:Request,res:Response)=>{
  await sequelize.sync({})
  const product =   await Product.create({
             nameProduct:'PS5',
             categoryProduct:'Eletronico'
    })

  const manufacturer = await Manufacturer.create({
            nameManufacturer:'SONY',
            cnpjManufacturer:'43.447.044/0004-10',
            product_id:1
    })

    res.render('index',{
          product,
          manufacturer      
    })
})
app.use((req:Request,res:Response)=>{
     res.status(400).send('<h1>Página não encontrada</h1>')
})


//app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT)

