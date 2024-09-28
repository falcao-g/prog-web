function tempo() {
	const data = new Date()

	let horas = data.getHours()
	let minutos = data.getMinutes()
	let segundos = data.getSeconds()

	horas = horas < 10 ? "0" + horas : horas
	minutos = minutos < 10 ? "0" + minutos : minutos
	segundos = segundos < 10 ? "0" + segundos : segundos

	document.getElementById("horas").textContent = horas
	document.getElementById("minutos").textContent = minutos
	document.getElementById("segundos").textContent = segundos
}

setInterval(tempo, 1000)

tempo()
