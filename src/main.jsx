import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/.config/theme/index.css'
import '@/.config/theme/themes.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
