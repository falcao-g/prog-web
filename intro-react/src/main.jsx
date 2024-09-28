import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import ProgWeb from "./ProgWeb.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<ProgWeb />
	</StrictMode>
)
