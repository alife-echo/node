import { Router } from "express";

import * as HomeController from '../controllers/homeController'
import * as InfoControlles from '../controllers/info'
import * as UserControlles from '../controllers/userController'

const router = Router()

router.get('/',HomeController.home)

router.get('/contato',InfoControlles.contact)

router.get('/sobre',InfoControlles.about)

router.get('/nome',UserControlles.name)

router.get('/idade',UserControlles.age)

router.post('/idade-resultado',UserControlles.ageResult)


export default router