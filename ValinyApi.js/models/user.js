const db = require('../config/config');


const User = {};
User.create = async (user, result) => {
        const sql =
            `INSERT INTO users (
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
                Registro
            )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(sql,
            [
                user.ID_Estudiante,
                user.P_Nombre,
                user.S_Nombre,
                user.T_Nombre,
                user.P_Apellido,
                user.S_Apellido,
                user.Genero,
                user.T_Documento,
                user.Curso,
                user.Administradores,
                user.Registro,
            ], (err, res) => {
                if (err) {
                    console.log('Error al crear el usuario: ', err);
                    result(err, null);
                }
                else {
                console.log('Usuario creado: ', { id: res.insertId, ...user
});
                result(null, { id: res.insertId, ...user });
            }
        }
    );
}

module.exports = User;