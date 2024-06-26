const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/**
* Importar rutas
*/
const estudiantesRoutes = require('./routes/EstudiantesRoutes');
const administradoresRoutes = require('./routes/AdministradoresRoutes'); // Importar las rutas de administradores

const port = process.env.PORT || 3000; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

/**
* LLamando las rutas
*/
estudiantesRoutes(app); // Usar las rutas de estudiantes
administradoresRoutes(app); // Usar las rutas de administradores

// Dirección IP V4 de la máquina, consulta con ipconfig 
// Mi IP: 192.168.1.43
server.listen(port, '192.168.1.35' || 'localhost', function() {
 console.log('Aplicación de NodeJS ' + process.pid + ' inició en el puerto ' + port);
});

app.get('/', (req, res) => { 
 res.send('Ruta raíz del Backend');
});

// Manejador de errores 
app.use((err, req, res, next) => { 
 console.log(err);
 res.status(err.status || 500).send(err.stack);
});
