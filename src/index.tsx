import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import RouterPaths from './routes/RouterPaths'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterPaths />
  </React.StrictMode>,
)
