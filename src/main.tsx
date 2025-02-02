import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Open } from "@/routes/Open.tsx";
import App from "./App.tsx";
import "./index.css";
import { Transaction } from "./components/ui/transaction.tsx";
import { mock_tx } from "./mock_data.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Transaction tx={mock_tx} />} />
        <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
