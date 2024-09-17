/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Servicio de express
 * Esta clase inicializa el servidor de express
 */

/**
 * Importando variables
 */

const express = require('express');

/**
 * @class Clase Server que inicia el servidor express
 */

class Server {

    constructor(port = 3000, path = '/api/') {
        this.app = express();
        this.port = port;
        this.path = path;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/envios', require('../Routes/envios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);     
        }).on('error', (err) => {
            console.error('Error al iniciar el servidor:', err);
        });
    }
}

module.exports = Server;