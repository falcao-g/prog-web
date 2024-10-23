/*
 *  Script com a lógica do Jogo da Velha
 *  Ele possui o esqueleto dos método essenciais.
 *
 *  DICAS GERAIS:
 *  - Modifique este arquivo o quanto for necessário.
 */

/*Declaração de uma variável que retorna uma lista de elementos presentes no documento 
* que coincidam com o grupo de seletores especificado. 
O objeto retornado é uma NodeList.  
*/
const cells = document.querySelectorAll(".cell")

//Variável que retorna o valor selecionado do statusText
const statusText = document.querySelector("#statusText")

/*Insira aqui as condições de vitória, para isso utilize a lógica do funcionamento
 * do jogo da velha
 */
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false

// Chamada da função para inicializar o jogo
initializeGame()

// Insira aqui a função para a inicialização do jogo
function initializeGame() {
	// Adicione um evento de clique para cada célula
	cells.forEach((cell, index) => {
		cell.addEventListener("click", () => {
			cellClicked(index)
		})
	})

	// Adicione um evento de clique para o botão de reiniciar
	document.querySelector("#restart-Btn").addEventListener("click", () => {
		restartGame()
	})

	// Inicializa o status do jogo
	statusText.innerHTML = "É a vez do jogador " + currentPlayer
	running = true
}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked(index) {
	// Verifica se o jogo está rodando
	if (!running) {
		return
	}

	// Verifica se a célula já foi clicada
	if (options[index] !== "") {
		return
	}

	// Adiciona o valor da célula
	options[index] = currentPlayer
	var cell = cells[index]

	updateCell(cell, index)
	checkWinner()
}

// Função para atualizar visualização da informação
function updateCell(cell, index) {
	cell.innerHTML = currentPlayer
	cell.style.color = currentPlayer === "X" ? "#00F" : "#F00"
	options[index] = currentPlayer

	checkWinner()
	changePlayer()
}

// Função para escolha e alternância de jogadores
function changePlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X"
	statusText.innerHTML = "É a vez do jogador " + currentPlayer
}

//Função para verificar o vencedor
function checkWinner() {
	winConditions.forEach((condition) => {
		const sequence = [options[condition[0]], options[condition[1]], options[condition[2]]]
		if (sequence.every((value) => value === "X")) {
			statusText.innerHTML = "X venceu"
		} else if (sequence.every((value) => value === "O")) {
			statusText.innerHTML = "O venceu"
		}
	})

	if (!options.includes("")) {
		statusText.innerHTML = "Deu velha"
		running = false
	}
}

// Função para reset das informações da tela
function restartGame() {
	options = ["", "", "", "", "", "", "", "", ""]
	currentPlayer = "X"
	running = true
	statusText.innerHTML = "É a vez do jogador " + currentPlayer
	cells.forEach((cell) => {
		cell.innerHTML = ""
		cell.style.color = "#000"
	})
}
