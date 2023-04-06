import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const companySchema = new Schema({
    company_id: {
        type: Number,
        required: true,
    },
    logo: {
        type: String,
    },
    name_en: {
        type: String,
        required: true,
    },
    name_ru: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    subcategory_1: {
        type: String,
    },
    subcategory_2: {
        type: String,
    },
    subcategory_3: {
        type: String,
    },
    reasoning: {
        type: String,
    },
    address: {
        type: String,
    },
    sanctions_es: {
        type: Number,
    },
    sanctions_gb: {
        type: Number,
    },
    sanctions_us: {
        type: Number,
    },
    sanctions_ca: {
        type: Number,
    },
    sanctions_ch: {
        type: Number,
    },
    sanctions_au: {
        type: Number,
    },
    sanctions_jp: {
        type: Number,
    },
    sanctions_pl: {
        type: Number,
    },
    sanctions_ua: {
        type: Number,
    },
    sanctions_nz: {
        type: Number,
    },
    sanctions_es_date: {
        type: String,
    },
    sanctions_gb_date: {
        type: String,
    },
    sanctions_us_date: {
        type: String,
    },
    sanctions_ca_date: {
        type: String,
    },
    sanctions_ch_date: {
        type: String,
    },
    sanctions_au_date: {
        type: String,
    },
    sanctions_jp_date: {
        type: String,
    },
    sanctions_pl_date: {
        type: String,
    },
    sanctions_ua_date: {
        type: String,
    },
    sanctions_nz_date: {
        type: String,
    },
    related_persons: {
        type: Array,
    },
    related_companies: {
        type: Array,
    },
});

export default mongoose.model('companies', companySchema);
