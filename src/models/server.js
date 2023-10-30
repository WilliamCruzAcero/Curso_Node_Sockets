const express = require('express');
const cors = require('cors');
const { socketController } = require('../../sockets/controller');

class Server {
     
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')( this.server );

        this.paths = {};

        //meddleweres
        this.middlewares();

        //rutas de aplicacion
        this.routes();

        // configuración de Sockets
        this.sockets();
    }

    middlewares() {
        // cors
        this.app.use( cors() );
        // Directorio publico
        this.app.use( express.static( 'public', {cacheControl: false} ) );
    }

    routes() {
        // this.app.use( this.categories, routerCategories );
    }

    sockets() {
        this.io.on("connection", socketController );
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Escuchando en el puerto: ${this.port}`)
        })
    }
}

module.exports = Server;