import database from '../db/connection.js';
import cData from './companies.json' assert { type: 'json' };
import Company from '../models/Company.js';
import pData from './persons.json' assert { type: 'json' };
import Person from '../models/Person.js';

let companyData = cData.map((co) => {
    const company = {};
    company.company_id = co.company_id;
    company.logo = co.log_en;
    company.name_en = co.name_en;
    company.name_ru = co.name_ru;
    company.country = co.country;
    company.category = co.category;
    co.subcategory_1
        ? (company.subcategory_1 = co.subcategory_1)
        : (company.subcategory_1 = '');
    co.subcategory_2
        ? (company.subcategory_2 = co.subcategory_2)
        : (company.subcategory_2 = '');
    co.subcategory_3
        ? (company.subcategory_3 = co.subcategory_3)
        : (company.subcategory_3 = '');
    company.reasoning = co.reasoning_en;
    company.address = co.address_en;
    company.sanctions_gb = co.sanctions_gb;
    company.sanctions_us = co.sanctions_us;
    company.sanctions_ca = co.sanctions_ca;
    company.sanctions_ch = co.sanctions_ch;
    company.sanctions_au = co.sanctions_au;
    company.sanctions_jp = co.sanctions_jp;
    company.sanctions_pl = co.sanctions_pl;
    company.sanctions_ua = co.sanctions_ua;
    company.sanctions_nz = co.sanctions_nz;
    company.sanctions_es_date = co.sanctions_es_date;
    company.sanctions_gb_date = co.sanctions_gb_date;
    company.sanctions_us_date = co.sanctions_us_date;
    company.sanctions_ca_date = co.sanctions_ca_date;
    company.sanctions_ch_date = co.sanctions_ch_date;
    company.sanctions_au_date = co.sanctions_au_date;
    company.sanctions_jp_date = co.sanctions_jp_date;
    company.sanctions_pl_date = co.sanctions_pl_date;
    company.sanctions_ua_date = co.sanctions_ua_date;
    company.sanctions_nz_date = co.sanctions_nz_date;
    company.related_persons = co.relations_person;
    company.related_companies = co.relations_company;
    return company;
});

let personData = pData.map((per) => {
    let person = {};
    person.person_id = per.person_id;
    person.name_en = per.name_en;
    person.name_ru = per.name_ru;
    person.position = per.position_en;
    person.reasoning = per.reasoning_en;
    person.category = per.category;
    per.subcategory_1
        ? (person.subcategory_1 = per.subcategory_1)
        : (person.subcategory_1 = '');
    per.subcategory_2
        ? (person.subcategory_2 = per.subcategory_2)
        : (person.subcategory_2 = '');
    per.subcategory_3
        ? (person.subcategory_3 = per.subcategory_3)
        : (person.subcategory_3 = '');
    person.sanctions_es = per.sanctions_es;
    person.sanctions_gb = per.sanctions_gb;
    person.sanctions_us = per.sanctions_us;
    person.sanctions_ca = per.sanctions_ca;
    person.sanctions_ch = per.sanctions_ch;
    person.sanctions_au = per.sanctions_au;
    person.sanctions_jp = per.sanctions_jp;
    person.sanctions_pl = per.sanctions_pl;
    person.sanctions_ua = per.sanctions_ua;
    person.sanctions_nz = per.sanctions_nz;
    person.sanctions_es_date = per.sanctions_es_date;
    person.sanctions_gb_date = per.sanctions_gb_date;
    person.sanctions_us_date = per.sanctions_us_date;
    person.sanctions_ca_date = per.sanctions_ca_date;
    person.sanctions_ch_date = per.sanctions_ch_date;
    person.sanctions_au_date = per.sanctions_au_date;
    person.sanctions_jp_date = per.sanctions_jp_date;
    person.sanctions_pl_date = per.sanctions_pl_date;
    person.sanctions_ua_date = per.sanctions_ua_date;
    person.sanctions_nz_date = per.sanctions_nz_date;
    person.photo = per.photo_name;
    person.dob = per.date_bd;
    per.date_dead ? (person.dod = per.date_dead) : (person.dod = '');
    per.city_bd_en ? (person.cob = per.city_bd_en) : (person.cob = '');
    person.related_persons = per.relations_person;
    person.related_companies = per.relations_company;
    return person;
});

const dataInsertion = async () => {
    await database.dropDatabase();
    await Company.create(companyData);
    await Person.create(personData);
    await database.close();
};

dataInsertion();
