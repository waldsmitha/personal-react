import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles";
import "./index.css";
import Theme from "./Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
