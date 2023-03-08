import express,{Request,Response} from 'express'

export const home = (req:Request,res:Response)=>{
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
}
