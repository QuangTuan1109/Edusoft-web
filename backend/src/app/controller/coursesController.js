import Courses from '../models/coursesModel.js'
import Department from '../models/departmentModel.js'
import Elective from '../models/electivesModel.js'
import CourseDetail from '../models/courseDetailModel.js'
import CourseRegist from '../models/courseRegist.js'
import Users from '../models/geninfoModel.js'

import jwt from 'jsonwebtoken'

/*=====================API GET=====================*/

// Get All Courses In The Database
async function GetCourses (req, res) {
    const AllCourses = await Courses.find({})

    return res.status(200).json(AllCourses)
}

// Get All Department In The Database
async function GetDepartment (req, res) {
    const AllDepartment = await Department.find({})

    return res.status(200).json(AllDepartment)
}

// Get Courses Based On Department
async function GetCoursesDepartment (req, res) {
    const depart = req.body.Department
    const department = await Department.findOne({name: depart})

    if (department) {
        var courses = []
        var getCourse = []
        courses = await Courses.find()

        for (var i in courses){
            for (var j = 0; j < courses[i].Department.length; j++){
                if (courses[i].Department[j] == department._id){
                    getCourse[i] = courses[i]
                }
            }
        }
        return res.status(200).json(getCourse)
    } else {
        return res.status(200).json('This department does not exist !!')
    }
}

// Get Course's detail information
async function GetCourseDetail (req, res) {
    const getCourseDetail = await CourseDetail.find()
        .populate({
            path: 'Lecturer',
            populate: 'GenID'
    })
        .populate('Course')

    return res.status(200).json(getCourseDetail)
}

/*=====================API Post=====================*/

// Register and save the course to the database
async function CourseRegis (req, res) {
    // Get the user's information
    const token = req.header('Authorization').split(' ')
    const verifyToken = jwt.verify(token[1], process.env.JWT_SECRET)
    const user = await Users.findOne({_id: verifyToken.sub}) 
    const User = user._id

    // Get the course's information and save it.
    var CourseDetail = []
    CourseDetail = req.body

    for (var i = 0; i < CourseDetail.length; i++){
        const findCourse = await Courses.findOne({CourseName: CourseDetail[i].Course})
        const CourseID = findCourse._id.toString()

        // Check the course that you registed or not
        const checkCourse = await CourseRegist.findOne({User: User})
        if (checkCourse){
            for (var j = 0; j < checkCourse.CourseDetail.length; j++){
                if (checkCourse.CourseDetail[j] != CourseID){ 
                    CourseDetail[i] = CourseID 
                }else{
                    return res.status(200).json('You registed ' + CourseDetail[i].Course)
                }
            }
        }else{
            CourseDetail[i] = CourseID 
        }
    }

    // Save course's registed to the database
    const saveCourse = new CourseRegist({User, CourseDetail})
    saveCourse.save()
    return res.status(200).json('Your courses registed to the database')
}

export default {
    GetCourses,
    GetDepartment,
    GetCoursesDepartment,
    GetCourseDetail,
    CourseRegis
}