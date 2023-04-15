import express,{Request,Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mustache from 'mustache-express'

dotenv.config()

const app = express()

app.set('view engine','mustache')
app.set('views', path.join(__dirname,'./views'))
app.engine('mustache',mustache())
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.urlencoded({extended:true}))

app.get('/',(req:Request,res:Response)=>{
     res.send('<h1>olá menor</h1>')
})

app.use((req:Request,res:Response)=>{
     res.status(404).send('<h1>Página não encontrada </h1>')
})
app.listen(process.env.PORT)