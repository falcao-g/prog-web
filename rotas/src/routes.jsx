import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Sobre from "./Sobre"
import Contato from "./Contato"
import NotFound from "./NotFound"

function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesApp
