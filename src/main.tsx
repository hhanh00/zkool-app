import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import BottomBar from './components/ui/bottom_nav.tsx'
import { Open } from './routes/Open.tsx'
import { FileForm } from './routes/File.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BottomBar />
      <Routes>
      <Route path="/" element={<FileForm />} />
      <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
