import mongoose from 'mongoose';

mongoose.set("returnOriginal", false)
mongoose.set("strictQuery", true)

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/uasanctions'

mongoose.connect(url, mongooseConfig).catch(error => {
    console.log("Error", error)
})

mongoose.connection.on("disconnected", () => {
    console.log("Connection to MongoDB: Disconnected")
})

mongoose.connection.on("error", (error) => {
    console.error("Error Connecting to MongoDB: ", error)
})

export default mongoose.connection