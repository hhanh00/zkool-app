import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import BottomBar from './components/ui/bottom_nav.tsx'
import { Open } from './routes/Open.tsx'
import { AccountList } from './routes/AccountManager.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BottomBar />
      <Routes>
      <Route path="/" element={<AccountList />} />
      <Route path="/open" element={<Open />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
