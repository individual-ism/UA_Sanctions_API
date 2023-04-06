import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';
import axios from 'axios';

const seedPeople = async () => {
    try {
        await axios.get(
            'https://sanctions.nazk.gov.ua/api/person/'
        );
        return response.data;
    } catch {
        console.error(error);
    }
};

const seedCompanies = async () => {
    try {
        await axios.get(
            'https://sanctions.nazk.gov.ua/api/company/'
        );
        return response.data;
    } catch {
        console.error(error);
    }
};

seedPeople();
seedCompanies();
