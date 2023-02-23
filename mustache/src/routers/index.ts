import {Request,Response,Router} from "express";


const router = Router()

router.get('/',(req:Request,res:Response)=>{
     res.render('home')
})

router.get('/cadastro',(req:Request,res:Response)=>{
    res.send('Pagina de Cadastro')
})

export default router