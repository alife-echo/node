import { Request,Response} from "express";
import sharp from "sharp";
export const uploadFile = async (req:Request,res:Response)=>{
    /*
    const files  = req.files as {[fieldname:string]:Express.Multer.File[]}
    console.log('AVATAR',files.avatar)
    console.log('GALLERY',files.gallery)
    *//*
    console.log('FILE',req.file)
    console.log('FILES',req.files)*/
    if(req.file){
        await sharp(req.file.path).resize(300,300,{
             fit:sharp.fit.cover,
             position:'center'
        }).toFormat('jpeg').toFile(`./public/media/${req.file.filename}.jpg`)
        res.json({image:`${req.file.filename}.jpg`})
    }else{
        res.status(400).json({error:'Arquivo inválido'})
    }
    
}