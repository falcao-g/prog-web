var soma = 0

function Soma() {
	const num1 = document.getElementById("num1").value
	const num2 = document.getElementById("num2").value
	soma = Number(num1) + Number(num2)
	document.getElementById("soma").innerHTML = "Soma = " + soma
}

function Dobro() {
	let dobro = soma * 2
	document.getElementById("dobro").innerHTML = "Dobro da Soma = " + dobro
}
