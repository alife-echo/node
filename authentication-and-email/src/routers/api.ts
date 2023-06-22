import {Router} from 'express'
import * as apiControllerAuthenticateEmail from '../controllers/apiAuthenticateAndLogin'

const router = Router()

router.get('/ping',apiControllerAuthenticateEmail.ping)

router.post('/register',apiControllerAuthenticateEmail.register)
router.post('/login',apiControllerAuthenticateEmail.login)

router.get('/list',apiControllerAuthenticateEmail.list)


export default router