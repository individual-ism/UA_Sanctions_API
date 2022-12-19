import mongoose from "mongoose"

let Schema = mongoose.Schema

const personSchema = new Schema({
    person_id: {
        type: Number,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    name_ru: {
        type: String,
        required: true
    },
    position: {
        type: String,

    },
    reasoning: {
        type: String,

    },
    category: {
        type: String,

    },
    subcategory_1: String,
    subcategory_2: String,
    subcategory_3: String,
    sanction_es: {
        type: Number,

    },
    sanction_gb: {
        type: Number,

    },
    sanction_us: {
        type: Number,

    },
    sanction_ca: {
        type: Number,

    },
    sanction_ch: {
        type: Number,

    },
    sanction_au: {
        type: Number,

    },
    sanction_jp: {
        type: Number,

    },
    sanction_pl: {
        type: Number,

    },
    sanction_ua: {
        type: Number,

    },
    sanction_nz: {
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
    photo: String,
    dob: String,
    dod: String,
    cob: String,
    related_persons: Array,
    related_companies: Array
})

export default mongoose.model("persons", personSchema)