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
        // required: true
    },
    country: {
        type: String,
        required: true
    },
    category: {
        type: String,
        // required: true
    },
    subcategory_1: {
        type: String,
        // required: true
    },
    subcategory_2: {
        type: String,
        // required: true
    },
    subcategory_3: {
        type: String,
        // required: true
    },
    reasoning: {
        type: String,

    },
    address: String,
    sanctions_es:{
        type: Number
    },
    sanctions_gb:{
        type: Number
    },
    sanctions_us:{
        type: Number
    },
    sanctions_ca:{
        type: Number
    },
    sanctions_ch:{
        type: Number
    },
    sanctions_au:{
        type: Number
    },
    sanctions_jp:{
        type: Number
    },
    sanctions_pl:{
        type: Number
    },
    sanctions_ua:{
        type: Number
    },
    sanctions_nz:{
        type: Number
    },
    sanctions_es_date: {
        type: String
    },
    sanctions_gb_date: {
        type: String
    },
    sanctions_us_date: {
        type: String
    },
    sanctions_ca_date: {
        type: String
    },
    sanctions_ch_date: {
        type: String
    },
    sanctions_au_date: {
        type: String
    },
    sanctions_jp_date: {
        type: String
    },
    sanctions_pl_date: {
        type: String
    },
    sanctions_ua_date: {
        type: String
    },
    sanctions_nz_date: {
        type: String
    },
    related_persons: Array,
    related_companies: Array
})

export default mongoose.model("companies", companySchema)