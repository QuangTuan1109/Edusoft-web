import mongoose from "mongoose";

const Schema = mongoose.Schema

const GenInfo = new Schema({
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Name: {
        type: String
    },
    Gender: {
        type: String
    },
    DOB: {
        type: String
    },
    POB: {
        type: String
    },
    Phone: {
        type: String
    },
    Address: {
        type: String
    },
    Role: {
        type: String
    },
    Department: {
        type: String
    },

})

export default mongoose.model('GenInfo', GenInfo)