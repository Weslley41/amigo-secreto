function criarEnvelope(nome, id) {
	let boxEnvelopes = document.getElementById('box-envelopes');

	let divEnvelope = document.createElement('a');
	divEnvelope.textContent = nome;
	divEnvelope.className = 'envelope';
	divEnvelope.id = id;
	divEnvelope.addEventListener('click', function() { abrir(id) }, false);

	boxEnvelopes.appendChild(divEnvelope);
}

function sortear(participante) {
	do {
		n_sort = parseInt(Math.random() * participantes.length);
		sorteado = participantes[n_sort];
	} while (!(!(sorteados.includes(sorteado)) && sorteado != participante));

	criarEnvelope(participante, sorteados.length);
	sorteados.push(participantes[n_sort]);
}

function abrir(id) {
	document.getElementById(id).style.backgroundImage = "url('assets/aberto.png')";
	document.getElementById(id).style.opacity = 0.75;
	document.querySelector('#resultado > b').innerText = sorteados[id];
	document.getElementById('resultado').style.display = "flex";
	document.querySelectorAll("*:not(#resultado, b, button)").forEach(element => {
		element.style.pointerEvents = 'none'
	})
}

function fechar() {
	document.getElementById('resultado').style.display = "none";
	document.querySelectorAll("*:not(#resultado, b, button)").forEach(element => {
    element.style.pointerEvents = 'auto';
	});
}

participantes = ['Antônio Ivo', 'Breno Vasconcelos', 'Celenny', 'Daniel Duarte', 'Daniel Farias', 'Edilson Morais', 'Evaldo', 'Felisberto', 'Fernando Soares', 'Francisco Mendes', 'Gerson Victor', 'Gabriel Benigno', 'Joao Neto', 'Joao Luiz', 'José Fhilipe', 'Laércio', 'Lucas Feitosa', 'Luis Henrique', 'Luiz Felipe', 'Maycon Douglas', 'Paulo Matheus', 'Richelle', 'Tiago Carvalho', 'Weslley']
sorteados = []
participantes.forEach(participante => {
	sortear(participante)
})
