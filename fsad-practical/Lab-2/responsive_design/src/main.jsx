import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Template from './components/Exp_1/Template.jsx'
// import Parent from './components/Exp_3/Parent.jsx'
import Exp_5 from './components/Exp_5/Exp_5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Template/> */}
     {/* <Parent/> */}
      < Exp_5/>
  </StrictMode>
)

