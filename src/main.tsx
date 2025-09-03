import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/config/theme/index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
