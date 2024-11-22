import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/navbar.css";
import "./styles/index.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/legal-pages.css";
import "./styles/contact.css";
import "./styles/cars.css";
import "./styles/options.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
