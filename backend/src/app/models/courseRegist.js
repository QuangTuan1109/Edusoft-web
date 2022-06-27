import mongoose from "mongoose";

const Schema = mongoose.Schema

const CourseRegist = new Schema({
    User: {
        type: Schema.Types.String,
        ref: 'GenInfo'
    },
    CourseDetail: {
        type: Schema.Types.Array,
        ref: 'CourseDetail'
    }
})

export default mongoose.model('CourseRegist', CourseRegist)