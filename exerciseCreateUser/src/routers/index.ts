import { Router } from "express";
import * as HomeController from '../controllers/homeController'

const router = Router()

router.get('/',HomeController.home)
router.post('/post-result',HomeController.postSubmit)

router.get('/postUpdate',HomeController.update)
router.post('/post-update',HomeController.updatePost)

router.get('/postDelete',HomeController.deletePost)
export default router