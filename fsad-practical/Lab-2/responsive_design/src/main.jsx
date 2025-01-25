import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Template from './components/Exp_1/Template.jsx'
import Parent from './components/Exp_3/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Template/> */}
     <Parent/>
  </StrictMode>
)
