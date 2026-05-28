document.addEventListener("DOMContentLoaded", () => {
	function printar(texto) {
		console.log(texto);
	}

	printar(`área do desenvolvedor`)
	//evento do submit do formulário
	document.querySelector('form').addEventListener('submit', function (e) {
		e.preventDefault(); //previne o envio do formulário, em outras palavras, impede que a página seja recarregada ou direcionada sem querer e etc.
		window.nome = document.getElementById('nome').value;
		var email = document.getElementById('email').value;
		const mensagem = document.getElementById('text').value;
		//só constantes com os dados inseridos e enviados pelo usuário, ou seja, o nome e email que ele digitou
		const assunto = 'Contato pelo site';
		const corpoEmail = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
		window.location.href = `mailto:tiagovicente804@gmail.com?subject=${assunto}&body=${corpoEmail}`; //envia o e-mail com os dados inseridos pelo usuári0
		printar(f`${nome} enviou mensagem para o dev pelo email: ${email} \n mensagem: \n ${mensagem}`)
	}); 

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
		_5: 'https://drive.google.com/file/d/11HRw2jij_U-HTmRizHYVHcOhiKSywn5L/preview',
		_6: 'https://drive.google.com/file/d/1IIjuZnOPCc12JNkH2gTZUOc5LMZy-N7p/preview'
	};
	let videoList = Object.values(videos);
	let currentIndex = 0;
	video_src.src = videoList[currentIndex];



	function trocar_caminho() {
		if (currentIndex < 0) {
			currentIndex = videoList.length - 1; // volta para o último vídeo
			video_src.src = videoList[currentIndex];
			printar(`vídeo mudado para o %0A endereço ${video_src.src}%0A na chave ${currentIndex}`)
		} else if (currentIndex >= videoList.length) {
			currentIndex = 0; // volta para o primeiro vídeo
			video_src.src = videoList[currentIndex];
			printar(`vídeo mudado para o %0A endereço ${video_src.src}%0A na chave ${currentIndex}`)
		} else {
			video_src.src = videoList[currentIndex];
			printar(`vídeo mudado para o \n endereço ${video_src.src}\n na chave ${currentIndex}`)
		}

	}

	botao_esq.addEventListener('click', function () {
		currentIndex--;
		trocar_caminho()

	});
	botao_dir.addEventListener('click', function () {
		currentIndex++;
		trocar_caminho()

	});

});

