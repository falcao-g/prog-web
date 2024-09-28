import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Biscoito from "./biscoito.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Biscoito />
	</StrictMode>
)
