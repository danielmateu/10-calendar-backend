//  EVENTS ROUTES
//  /api/events

const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos')
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/events');
const {validarJWT} = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');


const router = Router();

//CREAMOS EL CRUD

//Todas tienen que pasar por la validación del JWT

//Todas las peticiones debajo deben tener su JWT
router.use(validarJWT)

//obtener eventos
router.get('/', getEventos)

//crear un nuevo eventos 
router.post('/',
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','La fecha de inicio es obligatoria').custom( isDate ),
    check('end','La fecha de finalización es obligatoria').custom( isDate ),

    validarCampos
],
crearEvento)

//actualizar eventos
router.put('/:id', actualizarEvento)

//Eliminar Eventosr
router.delete('/:id', eliminarEvento)

module.exports = router;