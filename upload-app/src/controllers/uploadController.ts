import { Request,Response} from "express";
import sharp from "sharp";
import {unlink} from 'fs/promises'
export const uploadFile = async (req:Request,res:Response)=>{
    /*
    const files  = req.files as {[fieldname:string]:Express.Multer.File[]}
    console.log('AVATAR',files.avatar)
    console.log('GALLERY',files.gallery)
    *//*
    console.log('FILE',req.file)
    console.log('FILES',req.files)*/
    if(req.file){
        const filename : string = `${req.file.filename}.jpg`
        await sharp(req.file.path).resize(300,300,{
             fit:sharp.fit.cover,
             position:'center'
        }).toFormat('jpeg').toFile(`./public/media/${filename}`)
        await unlink(req.file.path)
        res.json({image:`${filename}`})
    }else{
        res.status(400).json({error:'Arquivo inválido'})
    }
    
}