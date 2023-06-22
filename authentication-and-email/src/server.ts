import path from "path";
import express,{Request,Response} from 'express'
import doteenv from 'dotenv'
import cors from 'cors'
doteenv.config()
const server = express()

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.use((req:Request,res:Response)=>{
     res.json({error:'endpoint não encontrada'}).status(404)
})
server.listen(process.env.PORT)