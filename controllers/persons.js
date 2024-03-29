import Person from '../models/Person.js';

export const getPersons = async (req, res) => {
    try {
        const persons = await Person.find({});
        res.json(persons);
    } catch {
        console.error(error);
        res.status(500).json(error);
    }
};

export const getPerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);
        res.json(person);
    } catch {
        console.error(error);
        res.status(500).json(error);
    }
};

export const getPersonByName = async (req, res) => {
    try {
        const { name_en } = req.params;
        const person = await Person.find({ name_en: name_en });
        res.json(person);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const createPerson = async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).json(person);
    } catch {
        console.error(error);
        res.status(500).json(error);
    }
};

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findByIdAndUpdate(id, req.body);
        res.status(201).json(person);
    } catch {
        console.error(error);
        res.status(500).json(error);
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const personDeleted = await Person.findByIdAndDelete(id);
        res.json('Person Successfully Deleted');
    } catch {
        console.error(error);
        res.status(500).json(error);
    }
};
