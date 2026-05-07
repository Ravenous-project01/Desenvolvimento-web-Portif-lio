document.addEventListener("DOMContentLoaded", () => {

	//evento do submit do formulário
	document.querySelector('form').addEventListener('submit', function (e) {
		e.preventDefault(); //previne o envio do formulário, em outras palavras, impede que a página seja recarregada ou direcionada sem querer e etc.
		window.nome = document.getElementById('nome').value;
		var email = document.getElementById('email').value;
		const mensagem = document.getElementById('text').value;
		//só constaantes com os dados inseridos e enviados pelo usuário, ou seja, o nome e email que ele digitou
		const assunto = 'Contato pelo site';
		const corpoEmail = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
		window.location.href = `mailto:tiagovicente804@gmail.com?subject=${assunto}&body=${corpoEmail}`; //envia o e-mail com os dados inseridos pelo usuário
		/*um problema interesante desse código, é que mesmo o email não sendo o correto ele envia a mensagem para o meu email, ou seja, o email
		que a pessoa escreveu no campo pode não ser o email que ela vai enviar, mas a mensagem vai chegar no meu email, e o email do remetente vai ser o email do usuário, ou seja, o email que a pessoa escreveu no campo de email, e não o email do remetente, ou seja, o email do usuário, e isso pode ser um problema, porque se a pessoa escrever um email falso, ou seja, um email que não existe
		é um pouco confuso professor mas eu tô avaliando isso, se puder seria legal se o senhor testasse isso e me explicasse uma forma melhor de fazer isso.*/
	});

	var pessoa = { name: nome }
	var registro = [function addRegistro() {
		let _1 = 1
	}];

	function data_hora() {
		let data = new Date().toLocaleDateString();
		let hora = new Date().toLocaleTimeString();
		const DH = { Data: data, Hora: hora };
		const texto = document.getElementById('dataEHora');
		texto.innerHTML = `data: ${data} hora: ${hora}`;
	}
	setInterval(data_hora, 1000);
	data_hora();
	
	const botao_esq = document.getElementById('para_esquerda');
	const botao_dir = document.getElementById('para_direita');
	const video_src = document.getElementById('video_selector');
	const videos = {
		_1: 'https://drive.google.com/file/d/1VpmTsa4n7SSzGPxf9dlMj4L-R2PdYinW/preview',
		_2: 'https://drive.google.com/file/d/1IH-8kg4SN6VeCFQHETwo80x2aHaazoDe/preview',
		_3: 'https://drive.google.com/file/d/1ogqFgmwZih7p5dYxjjUTYQHbwhVo5C5x/preview',
		_4: 'https://drive.google.com/file/d/1LS4Ndgg-hwaIB4XaJ8vcAEQFozf02Cr2/preview',
		_5: 'https://drive.google.com/file/d/11HRw2jij_U-HTmRizHYVHcOhiKSywn5L/preview'
	};

	botao_esq.addEventListener('click', function () {
		for (let i = 1; i <= Object.keys(videos).length; i++) {
			if (video_src.src === videos[`_` + i]) {
				if (i === 1) {
					video_src.src = videos[`_` + Object.keys(videos).length];
				} else {
					video_src.src = videos[`_` + (i - 1)];
				}
			}
		}
	});
	botao_dir.addEventListener('click', function () {
		for (let i = 1; i <= Object.keys(videos).length; i++) {
			if (video_src.src === videos[`_` + i]) {
				if (i === Object.keys(videos).length) {
					video_src.src = videos[`_` + 1];
				} else {
					video_src.src = videos[`_` + (i + 1)];
				}
			}
		}
	});
})