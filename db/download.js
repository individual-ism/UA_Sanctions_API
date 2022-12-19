import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

try { async () => {
await fetch("https://sanctions.nazk.gov.ua/api/person/")
    (resP => resP.json())
    (dataP => {
        fsPromises.writeFile("../seed/persons.json", JSON.stringify(dataP))
    })
}} catch {
    console.error(error)
}

try { async () => {
    await fetch("https://sanctions.nazk.gov.ua/api/company")
        (resC => resC.json())
        (dataC => {
            fsPromises.writeFile("../seed/companies.json", JSON.stringify(dataC))
        })
}} catch {
    console.error(error)
}
