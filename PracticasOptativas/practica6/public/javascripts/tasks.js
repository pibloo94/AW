$(function () {
	let tags = [];
	//Show task's text
	$('#texto').on('keyup', function () {
		let valor = $(event.target).prop('value').trim();
		$('#mensaje').text(valor);
	});
	// Add tag
	$('#addTag').on("click", function () {
		let valor = $('#tagText').prop('value').trim();
		if(valor == "") {
			alert("El tag no puede ser vacio");
			return;
		}
		if (tags.includes('@' + valor)) {
			alert("El tag no puede estar repetido");
			return;
		}
		let tag = $('<span id="tag' + tags.length + '" class="tag">' + valor + '</span>');
		$('#newTask').append(tag);
		tags.push('@' + valor);
	});
	//Parse task's text and tags
	$('#special').on("click", function (e) {
		let valor = $('#mensaje').text().trim();
		if (valor == "") {
			alert("La tarea no puede ser vacia");
			e.preventDefault();
			return;
		}
		tags.forEach(e => {
			valor += e;
		});
		$('#text').val(valor);
	});
	//Remove tag
	$('#newTask').on('click', 'span',  function () {
		tags.splice($(this).attr('id'), 1);
		$(this).remove();
	});
})