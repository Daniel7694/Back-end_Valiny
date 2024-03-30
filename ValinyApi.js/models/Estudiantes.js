const db = require('../config/config');


const Estudiantes = {};
Estudiantes.create = async (estudiantes, result) => {
        const sql =
            `INSERT INTO Estudiantes (
                ID_Estudiante,
                P_Nombre, 
                S_Nombre, 
                T_Nombre, 
                P_Apellido, 
                S_Apellido, 
                Genero, 
                T_Documento, 
                Curso, 
                Administradores, 
                Registro)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(sql,
            [
                estudiantes.ID_Estudiante,
                estudiantes.P_Nombre,
                estudiantes.S_Nombre,
                estudiantes.T_Nombre,
                estudiantes.P_Apellido,
                estudiantes.S_Apellido,
                estudiantes.Genero,
                estudiantes.T_Documento,
                estudiantes.Curso,
                estudiantes.Administradores,
                estudiantes.Registro,
            ], (err, res) => {
                if (err) {
                    console.log('Error al crear el usuario: ', err);
                    result(err, null);
                }
                else {
                console.log('Usuario creado: ');
        
            }
        }
    );
}

module.exports = Estudiantes;
;