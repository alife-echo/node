import express,{Request,Response} from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'
import {sequelize} from './instances/mysql'
import { Agency } from './models/Agency'
import { Employee } from './models/Employee'
import { BankAccount } from './models/BankAccount'
import { Client } from './models/Client'
import {People} from './models/People'
dotenv.config()
const app = express()
//sequelize.sync({force:true})
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','mustache')
app.engine('mustache',mustacheExpress())
app.use(express.static(path.join(__dirname,'../public')))



app.get('/', async (req:Request,res:Response)=>{
  await sequelize.sync({})

  const client = await Client.create({
     rg:718244,
     city:'Marabá'
  })
  
  const employee = await Employee.create({
     adress:'VALE DO ITACAIUNAS',
     codeEmployee:333,
     wage:3400.79
  })
  const agency = await Agency.create({
    numberAgency:222,
    city:'Marabá'
 })
  const people = await People.create({
     name:'Álife Silva De Moraes',
     Funcionario_idFuncionario:1,
     Client_idClient:1
  })



  const accountbank = BankAccount.create({
    numberAccount:111,
    balance:700.89,
    numberTransaction:922,
    date:'18/05/2023',
    value:300,
    AgencyIdAgency:1,
    ClientIdClient:1
  })


  /*
  const product =   await Product.create({
             nameProduct:'PS5',
             categoryProduct:'Eletronico'
    })

  const manufacturer = await Manufacturer.create({
            nameManufacturer:'SONY',
            cnpjManufacturer:'43.447.044/0004-10',
            product_id:1
    })
*/
    res.render('index',{   
    })
})
app.use((req:Request,res:Response)=>{
     res.status(400).send('<h1>Página não encontrada</h1>')
})


//app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT)

