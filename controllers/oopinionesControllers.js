import { Opinion } from '../models/Opiniones.js';

const saveOpiniones = async (req, res) => {

    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'Nombre Obligatorio'});
    }

    if(email.trim() === '') {
        errores.push({mensaje: 'Email Obligatorio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'Opinion Obligatoria'});
    }

    if(errores.length > 0) {

        const opiniones = await Opinion.findAll();

        // Show in the pag
        res.render('opiniones', {
            pagina: 'Opinones de Nuestros Clientes',
            errores,
            nombre,
            email,
            mensaje,
            opiniones
        });
    } else {

        // Save in DB
        try {
            await Opinion.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/opiniones')
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    saveOpiniones
}