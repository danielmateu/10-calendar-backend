//  EVENTS ROUTES
//  /api/events

const {Router} = require('express');
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/events');
const {validarJWT} = require('../middlewares/validar-jwt');


const router = Router();

//CREAMOS EL CRUD

//Todas tienen que pasar por la validación del JWT

//obtener eventos

console.log(getEventos);

router.get('/', validarJWT, getEventos)

//crear un nuevo eventos 

router.post('/', validarJWT, crearEvento)

//actualizar eventos

router.put('/', validarJWT, actualizarEvento)

//Eliminar Eventosr

router.delete('/', validarJWT, eliminarEvento)

module.exports = router;