import { useEffect, useState } from "react"
import "./pomodoro.css"

function App() {
	const [minutes, setMinutes] = useState(25)
	const [seconds, setSeconds] = useState(0)
	const [isActive, setIsActive] = useState(false)
	const [mode, setMode] = useState("pomodoro") // "pomodoro", "shortBreak", "longBreak"
	const [pomodoros, setPomodoros] = useState(0)

	useEffect(() => {
		let interval = null
		if (isActive) {
			interval = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						switchMode()
					} else {
						setMinutes(minutes - 1)
						setSeconds(59)
					}
				} else {
					setSeconds(seconds - 1)
				}
			}, 1000)
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isActive, seconds, minutes])

	const switchMode = () => {
		if (mode === "pomodoro") {
			setPomodoros(pomodoros + 1)
			if ((pomodoros + 1) % 4 === 0) {
				setMode("longBreak")
			} else {
				setMode("shortBreak")
				document.documentElement.style.setProperty("--main-color")
				document.documentElement.style.setProperty("--secondary-color")
			}
		} else {
			setMode("pomodoro")
			document.documentElement.style.setProperty("--main-color")
			document.documentElement.style.setProperty("--secondary-color")
		}
		setSeconds(0)
	}

	const startTimer = () => {
		setIsActive(true)
	}

	const stopTimer = () => {
		setIsActive(false)
	}

	const resetTimer = () => {
		setMinutes(mode === "pomodoro" ? 25 : mode === "shortBreak" ? 5 : 15)
		document.documentElement.style.setProperty(
			"--main-color",
			mode === "pomodoro" ? "#BA4949" : mode === "shortBreak" ? "#38858A" : "#397097"
		)
		document.documentElement.style.setProperty(
			"--secondary-color",
			mode === "pomodoro" ? "#c15c5c" : mode === "shortBreak" ? "#4C9196" : "#4D7FA2"
		)
		setSeconds(0)
	}

	useEffect(() => {
		resetTimer()
	}, [mode])

	return (
		<div id="container">
			<header>
				<h1 id="title">Pomodoro</h1>
			</header>

			<div id="box">
				<div id="top-row">
					<button
						id="pomodoro-button"
						className={`mini-buttons ${mode === "pomodoro" ? "highlight" : ""}`}
						onClick={() => {
							setMode("pomodoro")
						}}
					>
						Pomodoro
					</button>
					<button
						id="interval-button"
						className={`mini-buttons ${mode === "shortBreak" ? "highlight" : ""}`}
						onClick={() => {
							setMode("shortBreak")
						}}
					>
						Pausa
					</button>
					<button
						id="long-interval-button"
						className={`mini-buttons ${mode === "longBreak" ? "highlight" : ""}`}
						onClick={() => {
							setMode("longBreak")
						}}
					>
						Pausa longa
					</button>
				</div>

				<div id="timer">
					<span id="minutes">{String(minutes).padStart(2, "0")}</span>:
					<span id="seconds">{String(seconds).padStart(2, "0")}</span>
				</div>

				<button id={isActive ? "pause-button" : "start-button"} onClick={isActive ? stopTimer : startTimer}>
					{isActive ? "Parar" : "Iniciar"}
				</button>
				<button id="reset-button" onClick={resetTimer}>
					Resetar
				</button>
			</div>

			<div id="pomodoros-counter">
				Pomodoros hoje: <span id="pomodoros">{pomodoros}</span>
			</div>
		</div>
	)
}

export default App
