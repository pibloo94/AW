const mysql = require("mysql");

class DAOTasks {
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
				const sql = "SELECT * FROM task JOIN tag ON taskId = id WHERE user = ? ";
				connection.query(sql, [email], function(err, resultado){
					connection.release();
					if(err){
						callback(err, null);
					}else{
                        //TODO
                        let array = [];
						let tags = [];
						
						resultado.forEach(element => {
							tags.push(element.tag);
						});

						array.push({
                            "id": resultado[0].id,
                            "text": resultado[0].text,
                            "done": resultado[0].done,
                            "tags": tags,
						});

                        resultado = array;
                        
						callback(null, resultado);
					}
				});
			}
		});
	}

	//NUEVAS TAREAS
	//inserta en la BD la tarea task asociándola al usuario cuyo  identificador es email.
	insertTask(email, task, callback) {
		this.pool.getConnection(function (err, connection) {
			if (err) {
				callback(err);
			} else {
				const sql = "INSERT INTO task(user, text, done) VALUES(?, ?, ?)";
				connection.query(sql, [email, task.text, task.done], function (err, resultado) {
					connection.release();
					if (err) {
						callback(err);
					} else {
						const sql2 = "INSERT INTO tag (taskId, tag) VALUES ?";
						let insertar = [];
						task.tags.forEach(e => {
							insertar.push([resultado.insertId, e]);
						});
						connection.query(sql2, [insertar], function (err, resultado2) {
							if (err) {
								callback(err);
							} else {
								callback(null);
							}
						});
					}
				});
			}
		});
	}

	//TAREAS FINALIZADAS
	//marca la tarea idTask como realizada actualizando en la base de datos la columna done a true. 
	markTaskDone(idTask, callback) {
        this.pool.getConnection(function (err, connection) {
			if (err) {
				callback(err);
			} else {
				const sql = "UPDATE task SET done = 1 WHERE id = ?";
				connection.query(sql, [idTask], function (err, resultado) {
					connection.release();
                    if(err){
						callback(err);
                    }else{
                        callback(null);
                    }
				});
			}
		});
	}

	//BORRAR TAREAS
	//elimina todas las tareas asociadas al usuario cuyo correo es email y que tengan el valor true en la columna done.
	deleteCompleted(email, callback) {
		this.pool.getConnection(function(err, connection) {
			if (err) {
				callback(err);
				console.log(`Error al obtener la conexión: ${err.message}`);
			} else {
				const sql = "DELETE FROM task WHERE user = ? AND done = 1;";
				connection.query(sql, [email], function(err, resultado) {
					connection.release();
					if (err) {
						callback(err);
					} else {
						callback(null);
					}
				});
			}
		});
	}
}

module.exports = DAOTasks;