import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseDetail = new Schema({
    Course: {
        type: Schema.Types.String,
        ref: 'Courses'
    },
    Class: {
        type: String
    },
    Day: {
        type: String
    },
    Lecturer: {
        type: Schema.Types.String,
        ref: 'Lecturer'
    },
    Room: {
        type: String
    },
    Period: {
        type: String
    },
    Type: {
        type: String
    }
})

export default mongoose.model('CourseDetail', CourseDetail)