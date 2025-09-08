// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";
import { applyTheme, getSavedTheme } from "./utils/theme";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Apply theme on startup (synchronously)
applyTheme(getSavedTheme());

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</React.StrictMode>
);
