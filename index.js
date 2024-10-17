import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Connect to DB
db.authenticate()
    .then( () => console.log('DB working'))
    .catch (error => console.log(error));

// Define port
const port = process.env.PORT || 3000;

// Set up PUG as MVC
app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio= "Agencia de Viajes";
    next();
});

// Add body parser
app.use(express.urlencoded({extended: true}));

// Define public dir
app.use(express.static('public'));

// Add router
app.use('/', router);

// Check server working
app.listen(port, ()=> {
    console.log(`Puerto ${port}`);
});