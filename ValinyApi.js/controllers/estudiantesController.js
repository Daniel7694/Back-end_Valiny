const Estudiantes = require('../models/Estudiantes');


module.exports = {
    register(req, res) {
        const estudiantes = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        Estudiantes.create(estudiantes, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    }

}