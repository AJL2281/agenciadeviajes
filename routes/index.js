import express from 'express';
import { 
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaOpiniones,
    paginaInfoViaje
}  from '../controllers/paginasControllers.js';
import {
    saveOpiniones
} from '../controllers/oopinionesControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaInfoViaje);

router.get('/opiniones', paginaOpiniones);
router.post('/opiniones', saveOpiniones);


export default router;