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
    sanctions_es: {
        type: Number
    },
    sanctions_gb: {
        type: Number
    },
    sanctions_us: {
        type: Number
    },
    sanctions_ca: {
        type: Number
    },
    sanctions_ch: {
        type: Number
    },
    sanctions_au: {
        type: Number
    },
    sanctions_jp: {
        type: Number
    },
    sanctions_pl: {
        type: Number
    },
    sanctions_ua: {
        type: Number
    },
    sanctions_nz: {
        type: Number
    },
    sanctions_es_date: {
        type: String
    },
    sanctions_gb_date: String,
    sanctions_us_date: String,
    sanctions_ca_date: String,
    sanctions_ch_date: String,
    sanctions_au_date: String,
    sanctions_jp_date: String,
    sanctions_pl_date: String,
    sanctions_ua_date: String,
    sanctions_nz_date: String,
    photo: String,
    dob: String,
    dod: String,
    cob: String,
    related_persons: Array,
    related_companies: Array
})

export default mongoose.model("persons", personSchema)