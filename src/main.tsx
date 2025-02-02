import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Open } from "@/routes/Open.tsx";
import { History } from "@/routes/History.tsx";
import App from "./App.tsx";
import "./index.css";
import { mock_txs } from "./mock_data.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<History txs={mock_txs} />} />
        <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
