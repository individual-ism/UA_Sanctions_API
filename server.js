import database from "./db/connection.js"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import routes from "./routes/index.js"

let application = express()
let PORT = process.env.PORT || 4150

application.use(cors())
application.use(express.json())
application.use(morgan("dev"))

application.use("/", routes)

database.on("connected", () => {
    console.clear()
    console.log("Connection to MongoDB: Successful")
    application.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})