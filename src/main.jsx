import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <StrictMode> */}
    {/* <HooksApp /> */}
    <MainApp />
  {/* </StrictMode>, */}
  </BrowserRouter>
)
