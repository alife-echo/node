import { Router } from "express";
import * as HomeController from '../controllers/homeController'

const router = Router()

router.get('/',HomeController.home)
router.post('/post-result',HomeController.postSubmit)

export default router