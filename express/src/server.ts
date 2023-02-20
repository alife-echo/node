import express,{Request,Response} from 'express'

const server = express()

server.get('/',(req:Request,res:Response)=>{
       res.send('<h1>Olá</h1>')
})

server.listen(80)
