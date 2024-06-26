const db = require('../config/config');

const Administradores = {};

Administradores.create = async (administrador, result) => {
    const sql = `INSERT INTO Administradores (
                    ID_Admin,
                    Rol,
                    Clave,
                    T_Documento,
                    P_Nombre,
                    S_Nombre,
                    T_Nombre,
                    P_Apellido,
                    S_Apellido,
                    Genero
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        administrador.ID_Admin,
        administrador.Rol,
        administrador.Clave,
        administrador.T_Documento,
        administrador.P_Nombre,
        administrador.S_Nombre,
        administrador.T_Nombre,
        administrador.P_Apellido,
        administrador.S_Apellido,
        administrador.Genero
    ], (err, res) => {
        if (err) {
            console.log('Error al crear el administrador: ', err);
            result(err, null);
        } else {
            console.log('Administrador creado correctamente');
            result(null, res);
        }
    });
};

Administradores.getById = (id, result) => {
    const sql = 'SELECT * FROM Vista_Admin WHERE Documento = ?'; // Utilizamos la vista Vista_Admin en lugar de la tabla Administradores
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar el administrador: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Administrador encontrado: ', res[0]);
            result(null, res[0]);
        } else {
            // Si no se encuentra ningún administrador con ese ID
            result({ message: 'Administrador no encontrado' }, null);
        }
    });
};

Administradores.update = (id, newData, result) => {
    const sql = 'UPDATE Administradores SET ? WHERE ID_Admin = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar el administrador: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            // No se encontró ningún administrador con ese ID
            result({ message: 'No se encontró ningún administrador con ese ID' }, null);
        } else {
            console.log('Administrador actualizado correctamente');
            result(null, newData);
        }
    });
};

Administradores.delete = (id, result) => {
    const sql = 'DELETE FROM Administradores WHERE ID_Admin = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar el administrador: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            // No se encontró ningún administrador con ese ID
            result({ message: 'No se encontró ningún administrador con ese ID' }, null);
        } else {
            console.log('Administrador eliminado correctamente');
            result(null, res);
        }
    });
};

module.exports = Administradores;
