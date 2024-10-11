import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalProvider } from "./contexts/GlobalContext";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </NextUIProvider>
  </StrictMode>
);
