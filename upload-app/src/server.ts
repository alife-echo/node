import dotenv from 'dotenv'
import mustacheExpress from 'mustache-express'
import express,{Request,Response,ErrorRequestHandler, NextFunction} from 'express'
import path from 'path'
import { MulterError } from 'multer'
import routerMains from './routers/routerMain'
const server = express()
dotenv.config()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustacheExpress())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))
server.use(routerMains)

server.use((req:Request,res:Response)=>{
    res.status(404).send('Pagina não encontrada')
})
const errorHandler : ErrorRequestHandler = (err:Error,req:Request,res:Response,next:NextFunction) =>{
    res.status(400) //Bad Request
    if(err instanceof MulterError){
        res.json({error:err.code,errorField:err.field,errorMessage:err.message,errorName:err.name,errorStack:err.stack})
       
    }else{
        console.log(err)
        res.json({error:'Ocorreu algum erro'})
    }

}
server.use(errorHandler)
server.listen(process.env.PORT)