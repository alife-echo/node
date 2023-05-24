import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping',ApiController.ping)

router.get('/random',ApiController.random)

router.get('/name/:name',ApiController.name)

// :algo ---> parametro dinamico
// algo ---> parmetro fixo

// fixo deve ser primeiro do que dinamico

router.post('/frases',ApiController.createPhrase)
router.get('/frases',ApiController.getPhrases)
router.get('/frase/aleatoria',ApiController.randomPhrase) //  fixo deve ser primeiro do que dinamico
router.get('/frase/:id',ApiController.getPhrase)
router.put('/frase/:id',ApiController.updatePhrase)
router.delete('/frase/:id',ApiController.deletePhrase)

export default router