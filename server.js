import database from './db/connection.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import helmet from 'helmet'

let application = express();
let port = process.env.PORT || 4150;

application.use(cors());
application.use(express.json());
application.use(morgan('dev'));
application.use(helmet())
application.use(helmet.noCache())
application.use(helmet({
    frameguard: {
        action: 'deny'
    },
    hsts: {
        maxAge: 7776000,
        force: true
    },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'heroku.com', 'herokuapp.com']
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
