import { Router } from "express";
import personRoutes from "./persons.js"
import companyRoutes from "./companies.js"

const router = Router()

router.get("/", (req, res) => {
    res.send("Primary API Root")
})

router.use("/companies", companyRoutes)
router.use("/persons", personRoutes)

export default router