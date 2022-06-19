import mongoose from "mongoose";

const Schema = mongoose.Schema

const Student = new Schema({
    GenID: {
        type: Schema.Types.String,
        ref: 'GenInfo'
    },
    Class: {
        type: String
    },
    Major: {
        type: String
    },
    TrainSystem: {
        type: String
    },
    ClassOf: {
        type: String
    },
    Avisor: {
        type: String
    },
})

export default mongoose.model('Student', Student)