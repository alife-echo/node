import {Router} from 'express'
import {Auth} from '../middlewares/auth'
import * as apiControllerAuthenticateEmail from '../controllers/apiAuthenticateAndLogin'

const router = Router()

router.get('/ping',apiControllerAuthenticateEmail.ping)

router.post('/register',apiControllerAuthenticateEmail.register)
router.post('/login',apiControllerAuthenticateEmail.login)

router.get('/list',Auth.private,apiControllerAuthenticateEmail.list)


export default router