import Company from "../models/Company.js"

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find({})
        res.json(companies)
    } catch {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const getCompany = async (req, res) => {
    try {
        const {id} = req.params
        const company = await Company.findById(id)
        res.json(company)
    } catch {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body)
        await company.save()
        res.status(201).json(company)
    } catch {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {id} = req.params
        const company = await Company.findByIdAndUpdate(id, req.body)
        res.status(201).json(company)
    } catch {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const deleteCompany = async (req, res) => {
    try {
        const {id} = req.params
        const companyDeleted = await Company.findByIdAndDelete(id)
        if (companyDeleted) {
            res.status(200).json("Company deleted from database.")
        }
        throw new error("Company not found in database.")
    }
    catch {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}