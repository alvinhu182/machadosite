const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (nome.value === '' || email.value === '' || mensagem.value === '') {
		alert('Por favor, preencha todos os campos.');
	} else {
		alert('Obrigado por entrar em contato conosco!');
	}
});