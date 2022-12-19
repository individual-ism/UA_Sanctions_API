import { Router } from "express";
import entities from "./persons.js"

const router = Router()

router.get("/", (req, res) => {
    res.send("Primary API Root")
})

router.use("/entities", entityRoutes)

export default router