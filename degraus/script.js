function QuantidadeDeDegraus() {
	var alturaDegraus = parseFloat(document.getElementById("degrau").value)
	var alturaDesejada = parseFloat(document.getElementById("altura").value)
	var quantidade = alturaDesejada / alturaDegraus
	document.getElementById("resultado").innerHTML = "A quantidade de degraus necessários é " + quantidade
}
