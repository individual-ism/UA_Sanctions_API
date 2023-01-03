import { Router } from "express";
import personRoutes from "./persons.js"
import companyRoutes from "./companies.js"
// import path from "node"
import path from "path"
import { nextTick } from "process";


const router = Router()

router.get("/", (req, res) => {
    const __dirname = path.resolve(path.dirname(""))
    let options = {
        root: path.join(__dirname)
    }
    let fileName = "index.html"
    res.sendFile(fileName, options, (err) => {
        if (err) {
            nextTick(err)
        } else {
            console.log("Sent: ", fileName)
        }
    }
    )})
//     res.send("API root")
// })

router.use("/companies", companyRoutes)
router.use("/persons", personRoutes)

export default router