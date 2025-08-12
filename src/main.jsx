import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-5u7b0f7hbhdrkyf1.us.auth0.com"
    clientId="SEb1A18pNXFdOFAxFEUgBVanTQq7GZ9z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>


)