import {Request,Response,NextFunction} from 'express'
import { User } from '../models/User'
export const Auth = {
    private: async (req:Request,res:Response,next:NextFunction) =>{
        // Fazer verificação de auth
        let success = false
        if(req.headers.authorization){ // se o cabeçalho da requisição possuir um email e senha em base64
            let hash : string = req.headers.authorization.substring(6) // separe a string 'Basic' do hash
            let decoded : string = Buffer.from(hash,'base64').toString() // decodifique o base64 e transforme em string
            let data : string[]  = decoded.split(':') //decode ira retornar 'email:senha' usando o splite ficara ['email','senha']
            if(data.length  ===  2){ // se a requisição possuir email e senha
               let hasUser = await User.findOne({
                 where:{
                    email:data[0],   // procure no banco de dados 
                    password:data[1]  // procure no banco de dados 
                 }
               })
               if(hasUser){ // se o usuario estiver no banco
                success = true // troque o sucess para true
               }
            }
        }
        if(success){ // se success for true
            next() //conceda a passagem para o endpoit list
        }
        else{
            res.status(403) // Não permitido
            res.json({error:'Não autorizado'})
        }
    }
}