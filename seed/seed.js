import database from '../db/connection.js'
import cData from './companies.json' assert { type: "json" }
import Company from '../models/Company.js'
import pData from "./persons.json" assert { type: "json" }
import Person from "../models/Person.js"

let companyData = cData.map(co => {
    const company = {}
    company.company_id = co.company_id
    company.logo = co.log_en
    company.name_en = co.name_en
    company.name_ru = co.name_ru
    company.country = co.country
    company.category = co.category
    co.subcategory_1 ? company.subcategory_1 = co.subcategory_1 : company.subcategory_1 = ""
    co.subcategory_2 ? company.subcategory_2 = co.subcategory_2 : company.subcategory_2 = ""
    co.subcategory_3 ? company.subcategory_3 = co.subcategory_3 : company.subcategory_3 = ""
    company.reasoning = co.reasoning_en
    company.address = co.address_en
    company.sanction_es = co.sanction_es
    company.sanction_gb = co.sanction_gb
    company.sanction_us = co.sanction_us
    company.sanction_ca = co.sanction_ca
    company.sanction_ch = co.sanction_ch
    company.sanction_au = co.sanction_au
    company.sanction_jp = co.sanction_jp
    company.sanction_pl = co.sanction_pl
    company.sanction_ua = co.sanction_ua
    company.sanction_nz = co.sanction_nz
    company.sanction_es_date = co.sanction_es_date
    company.sanction_gb_date = co.sanction_gb_date
    company.sanction_us_date = co.sanction_us_date
    company.sanction_ca_date = co.sanction_ca_date
    company.sanction_ch_date = co.sanction_ch_date
    company.sanction_au_date = co.sanction_au_date
    company.sanction_jp_date = co.sanction_jp_date
    company.sanction_pl_date = co.sanction_pl_date
    company.sanction_ua_date = co.sanction_ua_date
    company.sanction_nz_date = co.sanction_nz_date
    company.related_persons = co.relations_person
    company.related_companies = co.relations_company
    return company
})

let personData = pData.map(per => {
    let person = {}
    person.person_id = per.person_id
    person.name_en = per.name_en
    person.name_ru = per.name_ru
    person.position = per.position_en
    person.reasoning = per.reasoning_en
    person.category = per.category
    per.subcategory_1 ? person.subcategory_1 = per.subcategory_1 : person.subcategory_1 = ""
    per.subcategory_2 ? person.subcategory_2 = per.subcategory_2 : person.subcategory_2 = ""
    per.subcategory_3 ? person.subcategory_3 = per.subcategory_3 : person.subcategory_3 = ""
    person.sanction_es = per.sanction_es
    person.sanction_gb = per.sanction_gb
    person.sanction_us = per.sanction_us
    person.sanction_ca = per.sanction_ca
    person.sanction_ch = per.sanction_ch
    person.sanction_au = per.sanction_au
    person.sanction_jp = per.sanction_jp
    person.sanction_pl = per.sanction_pl
    person.sanction_ua = per.sanction_ua
    person.sanction_nz = per.sanction_nz
    person.sanction_es_date = per.sanction_es_date
    person.sanction_gb_date = per.sanction_gb_date
    person.sanction_us_date = per.sanction_us_date
    person.sanction_ca_date = per.sanction_ca_date
    person.sanction_ch_date = per.sanction_ch_date
    person.sanction_au_date = per.sanction_au_date
    person.sanction_jp_date = per.sanction_jp_date
    person.sanction_pl_date = per.sanction_pl_date
    person.sanction_ua_date = per.sanction_ua_date
    person.sanction_nz_date = per.sanction_nz_date
    person.photo = per.photo_name
    person.dob = per.date_bd
    per.date_dead ? person.dod = per.date_dead : person.dod = ""
    per.city_bd_en ? person.cob = per.city_bd_en : person.cob = ""
    person.related_persons = per.relations_person
    person.related_companies = per.relations_company
    return person
})

const dataInsertion = async () => {
    await database.dropDatabase()
    await Company.create(companyData)
    await Person.create(personData)
    await database.close()
}

dataInsertion()

