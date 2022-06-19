import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './config/connect.js'

const app = express()
const port = process.env.PORT || 8081

app.use(morgan('dev'))
app.use(morgan("combined"));

app.use(express.json());
app.use(cors())

// Routes start server
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK!'
    })
})

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error handler function
app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;

    // response to client
    return res.status(status).json({
        error: {
            message: error.message,
        },
    });
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})