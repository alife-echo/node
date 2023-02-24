import {Request,Response,Router} from "express";


const router = Router()

router.get('/',(req:Request,res:Response)=>{
    let age : number = 17
    let showOld : boolean = false

    if(age > 18){
        showOld = true
    }
    else {
        showOld = false
    }

    let user = {
         name:'Álife',
         lastName:'moraes',
         showWelcome:true,
         showOld
    }
     res.render('home',{
         user

     })
})

router.get('/cadastro',(req:Request,res:Response)=>{
    res.send('Pagina de Cadastro')
})

export default router