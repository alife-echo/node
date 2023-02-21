import {Router,Request,Response} from 'express'

const router = Router()

router.get('/',(req:Request,res:Response)=>{
     res.send('Home Painel')
})

router.get('/formulario',(req:Request,res:Response)=>{
    res.send('Formulário de Cadastro painel')
})


export default router