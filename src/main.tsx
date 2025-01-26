import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Open } from "@/routes/Open.tsx";
import { Balance } from "@/routes/Balance.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Balance />} />
        <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
