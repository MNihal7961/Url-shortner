import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db";
import baseURL from './routes/index'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

const PORT: number | string = process.env.PORT || 5000



// Server connection
const server = app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// DB connection
dbConnect()


// Loging requests
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Route : ${req.method}:${req.originalUrl}`)
    next()
})

// Routes
app.use("/api", baseURL)



// Handle Errors
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason)
    server.close()
    process.exit(1)
});
process.on('uncaughtException', (e) => {
    console.error('Uncaught exception at:', e)

    server.close()
    process.exit(1)
});
