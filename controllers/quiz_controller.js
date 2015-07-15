//Funcion que se ejecuta con la ruta /quizes/question
exports.question = function (req,res) {
	res.render('quizes/question', {pregunta:'¿Cual es la capital de Italia?'});
};

//Funcion que se ejecuta con la ruta /quizes/answer
exports.answer = function (req,res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {resultado:'Correcto',respuesta:'Roma'});
	}else{
		res.render('quizes/answer', {resultado:'Incorrecto',respuesta:'Roma'});
	}
};