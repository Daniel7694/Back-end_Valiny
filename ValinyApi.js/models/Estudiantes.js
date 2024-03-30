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
        )};
        
        Estudiantes.getById = (id, result) => {
            const sql = 'SELECT * FROM Estudiantes WHERE ID_Estudiante = ?';
            db.query(sql, [id], (err, res) => {
                if (err) {
                    console.log('Error al buscar el estudiante: ', err);
                    result(err, null);
                    return;
                }
                if (res.length) {
                    console.log('Estudiante encontrado: ', res[0]);
                    result(null, res[0]);
                    return;
                }
                // Si no se encuentra ningún estudiante con ese ID
                result({ message: 'Estudiante no encontrado' }, null);
            });
        };
        
        module.exports = Estudiantes;