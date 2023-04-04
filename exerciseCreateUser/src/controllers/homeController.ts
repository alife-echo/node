import express,{Request,Response} from 'express'
import {sequelize} from '../instances/mysql'
export const home = async (req:Request,res:Response)=>{

     try{
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso')
        res.send('Conexão estabelecida com sucesso no banco')
     }
     catch(error){
         console.log(error)
     }
}