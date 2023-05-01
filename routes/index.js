import { Router } from 'express';
import personRoutes from './persons.js';
import companyRoutes from './companies.js';
import path from 'path';
import { nextTick } from 'process';

const router = Router();

router.get('/', (req, res) => {
    // const __dirname = path.resolve(path.dirname(''));
    // let options = {
    //     root: path.join(__dirname)
    // };
    // let fileName = 'index.html';
    // res.sendFile(fileName, options, (err) => {
    //     if (err) {
    //         nextTick(err);
    //     } else {
    //         console.log('Sent: ', fileName);
    //     }
    // });
    // res.send(
    // res.setHeader('Content-type','text/html')
    res.write(<h1>UA Sanctions API</h1>);
    res.write(<h5>A listing of companies and persons sanctioned in response to the Russian invasion of Ukraine</h5>);
    res.write(<a href='https://uasanctions.up.railway.app/companies'>Sanctioned Companies</a>);
    res.write(<a href='https://uasanctions.up.railway.app/persons'>Sanctioned Persons</a>)
    res.end();
    // )
});

router.use('/companies', companyRoutes);
router.use('/persons', personRoutes);

export default router;
