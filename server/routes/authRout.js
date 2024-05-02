import express from 'express'
import {registerController ,loginController, test} from '../controller/authController.js'
import { isAdmin, requiredSignIn } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/test', requiredSignIn, isAdmin , test)

router.get('/user-auth', requiredSignIn, (req, res, next) => {
    try {
      console.log("User auth route accessed");
      res.status(200).send({ok: true})
    } catch (error) {
      next(error)
    }
  })



export default router;