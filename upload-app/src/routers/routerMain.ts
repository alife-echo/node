import { Router } from "express";
import multer, { FileFilterCallback } from "multer";
import * as uploadController from '../controllers/uploadController'
import express,{Request} from 'express'

const router = Router()
/*
const storageConfig = multer.diskStorage({ // diskStorage = vou armenar no disco de armazenamento da maquina
      destination:(req:Request,file:Express.Multer.File,cb)=>{ // responsavel para destino de armazenamento do arquivo
               cb(null,'./tmp')
      }, 
      filename:(req:Request,file:Express.Multer.File,cb)=>{
          let randomName = Math.floor(Math.random() * 99999) 
          cb(null,`${randomName + Date.now()}.jpg`)
      }
})*/
const upload = multer({
     dest:'./tmp',
     fileFilter:(req,file,cb)=>{
         // cb(null,false) ->  não aceita nada que for enviado
         //cb(null,true)  -> aceita tudo que for enviado
         const allowed:string[] = ['image/jpg','image/jpeg','image/png'] // -> especifico os tipos de imagem para validação
         cb(null,allowed.includes(file.mimetype)) // --> o arquivo sera liberado caso o arquivo esteja incluso nos tipos definidos
        },
        limits:{fieldSize:20000000} // -> especificar o tamanho do aceitavel para do arquivo 20mb
        
    })
/*
router.post('/upload', upload.fields([
     {name:'avatar',maxCount:1},
     {name:'gallery',maxCount:3}
]),uploadController.uploadFile)
*/
router.post('/upload',upload.single('avatar'),uploadController.uploadFile)
export default router