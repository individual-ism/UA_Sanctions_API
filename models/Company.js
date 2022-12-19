import mongoose from "mongoose"

const Schema = mongoose.Schema

const companySchema = new Schema({
    company_id: {
        type: Number,
        required: true
    },
    logo: String,
    name_en: {
        type: String,
        required: true
    },
    name_ru: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    category: String,
    subcategory_1: String,
    subcategory_2: String,
    subcategory_3: String,
    reasoning: {
        type: String,

    },
    address: String,
    sanction_es:{
        type: Number,
    },
    sanction_gb:{
        type: Number,

    },
    sanction_us:{
        type: Number,

    },
    sanction_ca:{
        type: Number,

    },
    sanction_ch:{
        type: Number,

    },
    sanction_au:{
        type: Number,

    },
    sanction_jp:{
        type: Number,

    },
    sanction_pl:{
        type: Number,

    },
    sanction_ua:{
        type: Number,

    },
    sanction_nz:{
        type: Number,

    },
    sanction_es_date: Date,
    sanction_gb_date: Date,
    sanction_us_date: Date,
    sanction_ca_date: Date,
    sanction_ch_date: Date,
    sanction_au_date: Date,
    sanction_jp_date: Date,
    sanction_pl_date: Date,
    sanction_ua_date: Date,
    sanction_nz_date: Date,
    related_persons: Array,
    related_companies: Array
})

export default mongoose.model("companies", companySchema)