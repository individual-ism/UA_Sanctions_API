import { Router } from "express"
import * as controllers from "../controllers/persons.js"

const router = Router()

router.get("/", controllers.getPersons)
router.get("/:id", controllers.getPerson)
router.post("/", controllers.createPerson)
router.put("/:id", controllers.updatePerson)
router.delete("/:id", controllers.deletePerson)

export default router