import express,{Request,Response,Router} from 'express';

import {  Register,Login } from '../Controller/UserController';

const router = Router()

router.post('/register', Register)
router.post('/login', Login)

export default router;