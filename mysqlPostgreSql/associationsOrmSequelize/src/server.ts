import express,{Request,Response} from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.set('views',path.join(__dirname,'./views'))
app.set('view engine','mustache')
app.engine('mustache',mustacheExpress())
app.use(express.static(path.join(__dirname,'../public')))
app.get('/',(req:Request,res:Response)=>{
    res.send('<h1>Rota encontrada</h1>')
})
app.use((req:Request,res:Response)=>{
     res.status(400).send('<h1>Página não encontrada</h1>')
})


//app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT)

