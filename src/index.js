/**
 * Variables de entorno
 */
const dotenv = require('dotenv');
dotenv.config();

/**
 * Importando la app principal
 */
const app = require('./app');

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});