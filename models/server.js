const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        // express base
        this.app = express();
        this.port = process.env.PORT;

        // usuarios
        this.usuariosPath = "/api/usuarios";
        this.usuariosDir = "../routes/usuarios.routes";

        // Middleware
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico (ejemplo)
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require(this.usuariosDir));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;