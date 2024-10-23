import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Pomodoro from "./pomodoro.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Pomodoro />
	</StrictMode>
)
