import { Router } from "express"
import * as controllers from "../controllers/persons.js"

const router = Router()

router.get("/", getPersons)
router.get("/:id", getPerson)
router.post("/", createPerson)
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

export default router