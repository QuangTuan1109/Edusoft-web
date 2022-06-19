import jwt from 'jsonwebtoken'

import User from '../models/geninfoModel.js'
import student from '../models/studentModel.js'
import lecturer from '../models/lecturerModel.js'


/*
*  ==============================API SIGN IN AND SIGN UP==============================
*/

// Create TOKEN when sigin into the system
function CreateToken(Id) {
    return jwt.sign({
        iss: 'Le Quang Tuan',
        sub: Id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 3)
    }, process.env.JWT_SECRET)
}

// API SIGNIN
async function Signin(req, res) {
    // Check User name & Password
    const user = await User.findOne({Username: req.body.Username})
    if (!user) {
        return res.status(400).json('Your account is not already exist!!')
    }else if (user.Password != req.body.Password) {
        return res.status(400).json('Your password is wrong!!')
    }else {
        const token = await CreateToken(user._id.toString())
        res.setHeader('Authorization', token)
        return res.status(200).json('Welcome to IU Edusoft')
    }   
}

/*
*  ==============================API USER' INFORMATION ==============================
*/

// Get Student's Infomation
async function GetInforStudent(req, res) {
    const Student = await student.findById(req.params.id).populate('GenID')

    return res.status(200).json(Student)
} 

// Get Lecturer's Infomation
async function GetInforLecturer(req, res) {
    const Lecturer = await lecturer.findById(req.params.id).populate('GenID')

    return res.status(200).json(Lecturer)
} 


export default {
    Signin,
    CreateToken,
    GetInforStudent,
    GetInforLecturer
}