import { Router } from 'express';
import * as controllers from '../controllers/companies.js';

const router = Router();

router.get('/', controllers.getCompanies);
router.get('/:id', controllers.getCompany);
router.get('/name/:name_en', controllers.getCompanyByName);
router.post('/', controllers.createCompany);
router.put('/:id', controllers.updateCompany);
router.delete('/:id', controllers.deleteCompany);

export default router;
