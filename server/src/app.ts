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
    origin: ["http://localhost:5173"],
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

app.get('/',(req,res)=>{
res.json('hello')
})

// Routes
app.use("/api", baseURL)

// Backend proxy endpoint
app.get("/api/redirect/:urlCode", async (req: Request, res: Response) => {
    const { urlCode } = req.params;

    try {
        // Make the request to the external URL
        const response = await app.get(`https://google.com/${urlCode}`);

        // Forward the response back to the frontend
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


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
