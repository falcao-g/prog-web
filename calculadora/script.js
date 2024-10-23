const resultado = document.querySelector(".js-resultado")
const botoes = document.querySelectorAll(".js-btn-padroes, .js-btn-ac, .js-btn-igual, .js-btn-del, .js-btn-mais-menos")

function atualizarVisor(valor) {
	resultado.value = valor
}

function adicionarAoVisor(conteudo) {
	if (resultado.value === "0" && !isNaN(conteudo)) {
		resultado.value = conteudo
	} else if ("+/*-.".includes(conteudo) && "+/*-.".includes(resultado.value.slice(-1))) {
		return
	} else {
		resultado.value += conteudo
	}
}

function inverterSinal() {
	if (resultado.value.startsWith("-")) {
		resultado.value = resultado.value.substring(1)
	} else {
		resultado.value = "-" + resultado.value
	}
}

function deletarUltimo() {
	resultado.value = resultado.value.slice(0, -1) || "0"
}

function calcularResultado() {
	try {
		const expressao = resultado.value
		if (expressao.includes("/0")) {
			atualizarVisor("Erro")
		} else {
			const resultadoCalculado = eval(expressao)
			atualizarVisor(resultadoCalculado)
		}
	} catch (e) {
		atualizarVisor("Erro")
	}
}

function eventosClique() {
	botoes.forEach((botao) => {
		botao.addEventListener("click", () => {
			const valor = botao.textContent

			if (resultado.value === "Erro") {
				atualizarVisor("0")
			}

			if (valor === "AC") {
				atualizarVisor("0")
			} else if (valor === "Del") {
				deletarUltimo()
			} else if (valor === "=") {
				calcularResultado()
			} else if (valor === "+/-") {
				inverterSinal()
			} else {
				adicionarAoVisor(valor)
			}
		})
	})
}

function eventosTeclado() {
	document.addEventListener("keydown", (e) => {
		const tecla = e.key
		if (!isNaN(tecla) || "+-*/.".includes(tecla)) {
			adicionarAoVisor(tecla)
		} else if (tecla === "Enter") {
			calcularResultado()
		} else if (tecla === "Backspace") {
			deletarUltimo()
		} else if (tecla === "Escape") {
			atualizarVisor("0")
		}
	})
}

eventosClique()
eventosTeclado()
