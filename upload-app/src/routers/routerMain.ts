import { Router } from "express";
import multer from "multer";
import * as uploadController from '../controllers/uploadController'


const router = Router()
const upload = multer({dest:'./tmp'})

router.post('/upload', upload.fields([
     {name:'avatar',maxCount:1},
     {name:'gallery',maxCount:3}
]),uploadController.uploadFile)


export default router