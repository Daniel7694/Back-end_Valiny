const estudiantesController = require('../controllers/estudiantesController');

module.exports = (app) => { 
    app.post('/api/estudiantes/create', estudiantesController.register);
    app.get('/api/estudiantes/:id', estudiantesController.getById); // Nueva ruta para obtener un estudiante por su ID
}