import React from 'react'
import ReactDOM from 'react-dom/client'

import { init_ss } from './ss/init.ts'
import { App } from './ui/app.tsx'
import './index.css'
import '@picocss/pico'

;(async () => {
  await init_ss()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})()
