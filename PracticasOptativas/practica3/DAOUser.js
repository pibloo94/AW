const mysql = require("mysql");

class DAOUsers {
    constructor(pool) {
        this.pool = pool;
    }

    //USUARIO CORRECTO
    //comprueba si en la base de datos existe un usuario cuyo identificador es email y su password coincide con password.
    isUserCorrect(email, password, callback) {
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err, null);
                console.log(`Error al obtener la conexión: ${err.message}`);
            } else {
                const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
                connection.query(sql, [email, password], function(err, resultado) {
                    connection.release();
                    if (err) {
                        callback(err, null);
                    } else {
                        if (resultado.length > 0) {
                            callback(null, true);
                        } else {
                            callback(null, false);
                        }
                    }
                });
            }
        });
    }

    //IMAGEN DE PERFIN DE USUARIO
    //obtiene el nombre de fichero que contiene la imagen de perfil de un usuario cuyo identificador en la base de datos es email.
    getUserImageName(email, callback) {
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err, null);
                console.log(`Error al obtener la conexión: ${err.message}`);
            } else {
                const sql = "SELECT img FROM user WHERE email = ?";
                connection.query(sql, [email], function(err, resultado) {
                    connection.release();
                    if (err) {
                        callback(err, null);
                    } else {
                        if (resultado.length > 0) {
                            callback(null, resultado);
                        } else {
                            callback(null, false);
                        }
                    }
                });
            }
        });
    }

    //Cierre del pool de conexiones
    terminarConexion(callback) {
        this.pool.end(function(err) {
            if (err) {
                callback(err);
            } else {
                console.log("Exito al cerrar la conexion");
            }
        });
    }
}


module.exports = DAOUsers;