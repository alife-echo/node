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
     res.render('pages/home',{
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
    res.render('pages/contato')
})

router.get('/sobre',(req:Request,res:Response)=>{
      res.render('pages/sobre')
})

router.get('/nome',(req:Request,res:Response)=>{
    console.log("query string",req.query)  
    let nome : string = req.query.nome as string
    let sobrenome : string = req.query.sobrenome as string
    let idade : string = req.query.idade as string
    res.render('pages/nome',{
         nome,
         sobrenome,
         idade
    })

})
// Erro: Variable 'x' is used before being assigned. usando o compilador está alertando que você está tentando acessar o valor de uma variável que ainda não foi inicializada com um valor.
router.get('/idade',(req:Request,res:Response)=>{
        res.render('pages/idade')
})

router.post('/idade-resultado',(req:Request,res:Response)=>{
    let idade : number = 0
    let showAge : boolean = false
    if(req.body.ano){
        let anoNascimento : number = parseInt(req.body.ano as string) 
        let anoAtual : number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        showAge = true
    }
    
     res.render('pages/idade',{
         idade,
         showAge
     })
})


export default router