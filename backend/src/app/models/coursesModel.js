import mongoose from "mongoose";

const Schema = mongoose.Schema

const Courses = new Schema({
    Department: {
        type: Schema.Types.Array,
        ref: 'Department'
    },
    CourseID: {
        type: String
    },
    CourseName: {
        type: String
    },
    Credits: {
        type: String
    },
    CourseCredits: {
        type: String
    },
})

export default mongoose.model('Courses', Courses)