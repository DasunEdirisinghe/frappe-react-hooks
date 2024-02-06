import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FrappeProvider } from './lib'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FrappeProvider url='http://127.0.0.1:8012' enableSocket={false}>
      <App />
    </FrappeProvider>
  </React.StrictMode>
)
