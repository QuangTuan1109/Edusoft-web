import express from 'express'
import Courses from '../app/controller/coursesController.js'
import passport from 'passport'
import '../config/passport.js'

const router = express.Router();

router.get('/get-courses', Courses.GetCourses)

router.get('/get-department', Courses.GetDepartment)

router.get('/get-courses-department', Courses.GetCoursesDepartment)

router.get('/get-course-detail', Courses.GetCourseDetail)

router.post('/register-course', passport.authenticate('jwt', {session: false}), Courses.CourseRegis)

export default router