import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

const seedPeople = () => {
  try {
    fetch("https://sanctions.nazk.gov.ua/api/person/")
      .then((resP) => resP.json())
      .then((dataP) => {
        fsPromises.writeFile(`${process.cwd()}/seed/persons.json`, JSON.stringify(dataP));
      });
  } catch {
    console.error(error);
  }
};

const seedCompanies = async () => {
  try {
    await fetch("https://sanctions.nazk.gov.ua/api/company/")
      .then((res) => res.json())
      .then((dataC) => {
        fsPromises.writeFile(`${process.cwd()}/seed/companies.json`, JSON.stringify(dataC));
      });
  } catch {
    console.error(error);
  }
};

// seedPeople();
seedCompanies();
