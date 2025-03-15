import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Location from './components/InLab_1/Location';
// import Template from './components/Exp_1/Template.jsx'
// import Parent from './components/Exp_3/Parent.jsx'
// import Exp_5 from './components/Exp_5/Exp_5.jsx'


createRoot(document.getElementById('root')).render(
  (
    <>
      <StrictMode>
         {/* <Template/> */}
         {/* Rendering the InLab_1 component for demonstration purposes */}
  <Location/>
      </StrictMode>
    </>
  )
);