import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Department = new Schema({
    name: {
        type: String
    }
})

export default mongoose.model('Department', Department)