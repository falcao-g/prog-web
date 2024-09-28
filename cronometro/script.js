let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let interval

function start() {
	if (!interval) {
		interval = setInterval(timer, 10)
	}
}

function reset() {
	hours = 0
	minutes = 0
	seconds = 0
	milliseconds = 0
	update()
}

function stop() {
	clearInterval(interval)
	interval = null
}

function timer() {
	milliseconds += 10
	if (milliseconds >= 1000) {
		milliseconds = 0
		seconds++
	}
	if (seconds >= 60) {
		seconds = 0
		minutes++
	}
	if (minutes >= 60) {
		minutes = 0
		hours++
	}
	update()
}

function update() {
	document.getElementById("horas").innerText = format(hours)
	document.getElementById("minutos").innerText = format(minutes)
	document.getElementById("segundos").innerText = format(seconds)
	document.getElementById("milissegundo").innerText = format(milliseconds)
}

function format(time) {
	return time < 10 ? "0" + time : time
}
