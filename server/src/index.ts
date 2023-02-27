import express, { Application } from "express"
import cors from 'cors'
import dotenv, { config } from "dotenv"
import router from "./Routes"
import mongoose from "mongoose"

const App: Application = express()
const PORT = 4444 || process.env.port
const mode = process.env.Node_ENV
App.use(cors())
App.use(express.json())
App.use("/", router)
mongoose.connect("mongodb://WaEBUadNIdeminShE:W20eAdThUe3deX0TH9@api.getmelight.com:27017/edneed_ecom").then(() => {
    App.listen(PORT, () => {
        console.log(`Db is connected and server on ${PORT}`)
    })
})
