import mongoose from "mongoose";

mongoose.set("returnOriginal", false)
mongoose.set("strictQuery", true)

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/uasanctions", mongooseConfig).catch(error => {
    console.log("Error", error)
})

// mongoose.connection.on("connected", () => {
//     console.log("Connection to MongoDB: Successful")
// })

mongoose.connection.on("disconnected", () => {
    console.log("Connection to MongoDB: Disconnected")
})

mongoose.connection.on("error", (error) => {
    console.error("Error Connecting to MongoDB: ", error)
})

export default mongoose.connection