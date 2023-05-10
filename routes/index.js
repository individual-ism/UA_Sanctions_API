import { Router } from 'express';
import personRoutes from './persons.js';
import companyRoutes from './companies.js';
import path from 'path';
import { nextTick } from 'process';

const router = Router();

router.get('/', (req, res) => {
    res.send("UA Sanctions API | Sanctioned Companies: https://uasanctions.up.railway.app/companies | Sanctioned Persons: https://uasanctions.up.railway.app/persons")
});

router.use('/companies', companyRoutes);
router.use('/persons', personRoutes);

export default router;
