const estudiantesController = require('../controllers/estudiantesController');

module.exports = (app) => { 
    app.post('/api/estudiantes/create', estudiantesController.register);
    app.get('/api/estudiantes/:id', estudiantesController.getById);
    app.put('/api/estudiantes/:id', estudiantesController.update); // Nueva ruta para actualizar un estudiante por su ID
}
