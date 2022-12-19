import { Router } from "express"
import * as controllers from "../controllers/companies.js"

const router = Router()

router.get("/", getCompanies)
router.get("/:id", getCompany)
router.post("/", createCompany)
router.put("/:id", updateCompany)
router.delete("/:id", deleteCompany)

export default router