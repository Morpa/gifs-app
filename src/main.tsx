import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifsApp } from "./GifsApp";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<GifsApp />
		</StrictMode>,
	);
}
