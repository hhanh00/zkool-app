import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BottomBar from "@/components/ui/bottom_nav.tsx";
import { Open } from "@/routes/Open.tsx";
import { NewAccount } from "@/routes/NewAccount.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BottomBar />
      <Routes>
        <Route path="/" element={<NewAccount />} />
        <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
