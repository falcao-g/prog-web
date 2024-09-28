import { useState } from "react"
import "./App.css"
import biscoito from "./assets/biscoito.png"

// Componente App como função
function Biscoito() {
	// Utilizando o hook useState para armazenar o texto da frase
	const [textoFrase, setTextoFrase] = useState("")

	// Array com as frases do biscoito da sorte
	const frases = [
		"Siga os bons e aprenda com eles.",
		"O bom-senso vale mais do que muito conhecimento.",
		"O riso é a menor distância entre duas pessoas.",
		"Deixe de lado as preocupações e seja feliz.",
		"Realize o óbvio, pense no improvável e conquiste o impossível.",
		"Acredite em milagres, mas não dependa deles.",
		"A maior barreira para o sucesso é o medo do fracasso.",
	]

	// Função que gera uma frase aleatória
	const quebraBiscoito = () => {
		let numeroAleatorio = Math.floor(Math.random() * frases.length)
		setTextoFrase(`"${frases[numeroAleatorio]}"`)
	}

	return (
		<div className="container">
			<img src={biscoito} className="img" alt="Biscoito da Sorte" />
			<Botao nome="Abrir Biscoito" acaoBtn={quebraBiscoito} />
			<h3 className="textoFrase">{textoFrase}</h3>
		</div>
	)
}

// Componente Botao como função
function Botao({ nome, acaoBtn }) {
	return (
		<div>
			<button onClick={acaoBtn}>{nome}</button>
		</div>
	)
}

export default Biscoito
