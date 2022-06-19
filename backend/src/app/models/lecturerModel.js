import mongoose from "mongoose";

const Schema = mongoose.Schema

const Lecturer = new Schema({
    GenID: {
        type: Schema.Types.String,
        ref: 'GenInfo'
    },
})

export default mongoose.model('Lecturer', Lecturer)