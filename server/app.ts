import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT: number | string = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log("Server up and running at port:", PORT))


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