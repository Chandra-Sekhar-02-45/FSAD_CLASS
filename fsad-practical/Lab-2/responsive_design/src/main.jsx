import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Template from './components/Exp 1/Template.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Template/>
  </StrictMode>,
)
