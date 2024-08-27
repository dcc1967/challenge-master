const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const cifrarBtn = document.getElementById('cifrar');
const descifrarBtn = document.getElementById('descifrar');
const copiarBtn = document.getElementById('copiar');

cifrarBtn.addEventListener('click', () => {
	const textoCifrado = cifrar(texto.value);
	resultado.innerText = textoCifrado;
    texto.value = ""
});

descifrarBtn.addEventListener('click', () => {
	const textoDescifrado = descifrar(texto.value);
	resultado.innerText = textoDescifrado;
    texto.value = ""
});

function cifrar(texto) {
	// Cifrar el texto utilizando un algoritmo simple (reemplazar cada letra con la letra 3 posiciones adelante)
	let textoCifrado = '';
	for (let i = 0; i < texto.length; i++) {
		const charCode = texto.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			// Letras mayúsculas
			textoCifrado += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			// Letras minúsculas
			textoCifrado += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
		} else {
			// Caracteres especiales
			textoCifrado += texto[i];
		}
	}
	return textoCifrado;
}

function descifrar(textoCifrado) {
	// Descifrar el texto utilizando el algoritmo inverso
	let textoDescifrado = '';
	for (let i = 0; i < textoCifrado.length; i++) {
		const charCode = textoCifrado.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			// Letras mayúsculas
			textoDescifrado += String.fromCharCode((charCode - 65 - 3 + 26) % 26 + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			// Letras minúsculas
			textoDescifrado += String.fromCharCode((charCode - 97 - 3 + 26) % 26 + 97);
		} else {
			// Caracteres especiales
			textoDescifrado += textoCifrado[i];
		}
	}
	return textoDescifrado;
}

function copiarTexto() {
    let texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado");
    });
}