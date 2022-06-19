import express from 'express'
import passport from 'passport'
import '../config/passport.js'

import user from '../app/controller/userController.js'

const router = express.Router();



// Route login
router.post('/signin', user.Signin)

// Route for student
router.get('/student/:id', passport.authenticate('jwt', {session: false}), user.GetInforStudent)

// Route for lecturer
router.get('/lecturer/:id', passport.authenticate('jwt', {session: false}), user.GetInforLecturer)

// Route for admin

export default router
