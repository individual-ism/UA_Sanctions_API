import database from './db/connection.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';

let application = express();
let port = process.env.PORT || 4150;

application.use(cors());
application.use(express.json());
application.use(morgan('dev'));
application.use(helmet.noCache())
application.use(helmet({
    frameguard: {
        action: 'deny'
    },
    hsts: {
        maxAge: 7776000
    },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'trusted-cdn.com']
        }
    },
    dnsPrefetchControl: false
}))

application.use('/', routes);

database.on('connected', () => {
    console.clear();
    console.log('Connection to MongoDB: Successful');
    application.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});
