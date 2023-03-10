import express,{Request,Response} from 'express'
import {Product} from '../models/Product'
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
         products:Product.getAll(),
         upPrice : Product.getFromPrinceAfter(12),
        list:[
            'Alguma coisa legal',
            'outra frase' 
        ]
        
     })
}
