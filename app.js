const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createFile, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limit);
        break;
    case 'crear':
        createFile(argv.base, argv.limit).then(msg => console.log('Archivo creado: ', colors.green(msg)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
};