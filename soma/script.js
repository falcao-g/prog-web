function Soma() {
	const num1 = document.getElementById("num1").value
	const num2 = document.getElementById("num2").value
	let soma = Number(num1) + Number(num2)
	document.getElementById("soma").innerHTML = "Soma = " + soma
}
