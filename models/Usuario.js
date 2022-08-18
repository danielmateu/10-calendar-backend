const {Schema,model} = require('mongoose');

const usuarioSchema = Schema({
    name: {
        type: 'string',
        require: true,

    },
    email: {
        type: 'string',
        require: true,
        unique: true,
    },
    password: {
        type: 'string',
        require: true,
    }
})

module.exports = model('Usuario', usuarioSchema);