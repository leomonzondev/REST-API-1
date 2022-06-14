const express = require('express')
const cors = require('cors')



class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'


        //Middlewares -> Funciones que siempre se ejecutan al levantar servidor
        this.middlewares()

        //Rutas de mi app

        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Lectura y parseo del body
        this.app.use( express.json() )

        //Directorio Publico
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('sv running in port ', this.port)
        })
    }
}


module.exports = Server