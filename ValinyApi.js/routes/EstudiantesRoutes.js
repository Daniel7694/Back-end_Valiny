const estudiantesController = require('../controllers/estudiantesController');
module.exports = (app) => { 
 app.post('/api/estudiantes/create', estudiantesController.register);
} 