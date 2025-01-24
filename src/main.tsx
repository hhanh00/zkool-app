import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Welcome } from './routes/Welcome.tsx'
import BottomBar from './components/ui/bottom_nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BottomBar />
      <Routes>
      <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
