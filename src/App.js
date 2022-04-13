import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/NotFound/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
