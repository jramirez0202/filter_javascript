window.onload = () => {
	// traer info del html
    let inputText = document.querySelector('#texto-entrada');
		let inputResult = document.querySelector('#resultados');

		// filtrar, limpar las palabras, entrega un array
		const cleanWords = (str, regex) => {
			let array = str
			.replace(regex, '')
			.toLowerCase()
			.split("")
			.sort()
			.filter(value => value != '');
			return array;
		}
		//Retorna la cantidad total de letras o palabras
		const countString = (string) => {
			let counts = {};
			string.forEach((string) => {
				counts[string] = (counts[string] || 0) +1;
				
			});

			return counts;
		}

		// Agregar resultados al DOM
		//nota linea 30 es como decir: results.each do |result|
		const showResults = (words, results, node)  => {
			for (let result in results) {
					node.insertAdjacentHTML(
						'beforebegin',
						`<p>
								<strong>${words}: ${result} </strong>
								<span>Cantidad: ${results[result]}</span>
						</p>`
				)

			}

		}

		// console.log(cleanWords(inputText.textContent, /[^A-Za-z]\s*/g, ''));
		const words = cleanWords(inputText.textContent, /[^A-Za-z]\s/g, ' ');
		showResults('palabra', countString(words), inputResult)
}
