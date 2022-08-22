import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Document Object Model
// React, cria nosso app html e js dentro da div com id "root"
// SPA, Consiste em o JS construir a interface da aplicação e não como SSR, onde a interface fica direto no html

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
