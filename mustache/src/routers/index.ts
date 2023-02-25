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
         showOld,
        
    }
     res.render('home',{
         user,
         products:[
            {title:'Produto X',price:10},
            {title:'Produto Y',price:15},
            {title:'Produto W',price:20}
        ],
        list:[
            'Alguma coisa legal',
            'outra frase' 
        ]
        
     })
})

router.get('/contato',(req:Request,res:Response)=>{
    res.render('contato')
})

router.get('/sobre',(req:Request,res:Response)=>{
      res.render('sobre')
})

export default router