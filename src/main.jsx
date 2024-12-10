import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './container'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
