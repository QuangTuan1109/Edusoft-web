import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Elective = new Schema({
    ElectiveID: {
        type: String
    },
    Course: {
        type: Schema.Types.String,
        ref: 'Courses'
    }
})

export default mongoose.model('Elective', Elective)