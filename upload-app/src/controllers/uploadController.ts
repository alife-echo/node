import { Request,Response} from "express";

export const uploadFile = async (req:Request,res:Response)=>{
    /*
    const files  = req.files as {[fieldname:string]:Express.Multer.File[]}
    console.log('AVATAR',files.avatar)
    console.log('GALLERY',files.gallery)
    */
    console.log('FILE',req.file)
    console.log('FILES',req.files)
    res.json({})
}