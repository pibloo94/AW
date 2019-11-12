const mysql = require("mysql");

class DAOTask {
    constructor(pool) {
        this.pool = pool;
    }

    //TAREAS DE USUARIO
    //devuelve todas las tareas asociadas a un determinado usuario de la BD junto con los tags asociados a cada una de ellas.
    getAllTasks(email, callback) {
        this.pool.getConnection(function(err, connection){
            if(err){
                callback(err, null);
            }else{
                const sql = "SELECT id FROM task JOIN tag ON task.id = tag.taskId";
                connection.query(sql, function(err, resultado){
                    connection.release();
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, resultado);
                    }
                });
            }
        });
    }

    //NUEVAS TAREAS
    //inserta en la BD la tarea task asociándola al usuario cuyo  identificador es email.
    insertTask(email, task, callback) {

    }

    //TAREAS FINALIZADAS
    //marca la tarea idTask como realizada actualizando en la base de datos la columna done a true. 
    markTaskDone(idTask, callback) {

    }

    //BORRAR TAREAS
    //elimina todas las tareas asociadas al usuario cuyo correo es email y que tengan el valor true en la columna done.
    deleteCompleted(email, callback) {
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err, null);
                console.log(`Error al obtener la conexión: ${err.message}`);
            } else {
                const sql = "DELETE FROM task"; //TODO
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


}