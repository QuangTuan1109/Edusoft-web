import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database Connected!"))
.catch(err => console.log("MongoDB Connection error: ",err));

const mongoURI = process.env.DATABASE

export default mongoURI
