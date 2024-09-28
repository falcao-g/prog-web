function calculaJuros() {
	var valor = parseFloat(document.getElementById("Vtotal").value)
	var parcelas = parseInt(document.getElementById("Qparcelas").value)
	if (parcelas == 1) {
		var juros = 0
	} else if (parcelas <= 3) {
		var juros = 0.03
	} else if (parcelas >= 4) {
		var juros = 0.07
	}

	var valorFinal = valor + valor * juros
	var valorParcela = valorFinal / parcelas
	document.getElementById("resultadoT").innerHTML = "O valor final é de: R$ " + valorFinal.toFixed(2)
	document.getElementById("resultadoP").innerHTML = "Em parcelas de: " + parcelas + "x de R$ " + valorParcela.toFixed(2)
}
