import { Router } from "express";
import multer, { FileFilterCallback } from "multer";
import * as uploadController from '../controllers/uploadController'
import express,{Request} from 'express'

const router = Router()
const storageConfig = multer.diskStorage({ // diskStorage = vou armenar no disco de armazenamento da maquina
      destination:(req:Request,file:Express.Multer.File,cb)=>{ // responsavel para destino de armazenamento do arquivo
               cb(null,'./tmp')
      }, 
      filename:(req:Request,file:Express.Multer.File,cb)=>{
          let randomName = Math.floor(Math.random() * 99999) 
          cb(null,`${randomName + Date.now()}.jpg`)
      }
})
const upload = multer({
     storage:storageConfig
    })
/*
router.post('/upload', upload.fields([
     {name:'avatar',maxCount:1},
     {name:'gallery',maxCount:3}
]),uploadController.uploadFile)
*/
router.post('/upload',upload.single('avatar'),uploadController.uploadFile)
export default router