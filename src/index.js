import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

// const rootElement = document.body
const app = ReactDOM.createRoot(document.getElementById('main'))
// const app = ReactDOM.createRoot(document.body)
app.render(<App />)
