import { Viaje } from '../models/Viaje.js';
import { Opinion } from '../models/Opiniones.js';


const paginaInicio = async (req, res) => {

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Opinion.findAll({limit: 3}) );

    // req to db
    try {
        const result = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: result[0],
            opiniones: result[1]
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros =  (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes =  async (req, res) => {

    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Destinos a Elegir',
        viajes
    });
};

const paginaOpiniones = async (req, res) => {
    try {
        const opiniones = await Opinion.findAll();

        res.render('opiniones', {
            pagina: 'Opinones de Nuestros Clientes',
            opiniones
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaInfoViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Detalles del Viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaOpiniones,
    paginaInfoViaje
}