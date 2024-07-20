import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './components/page'
import './index.css'

// const rootElement = document.body
const app = ReactDOM.createRoot(document.getElementById('main'))
// const app = ReactDOM.createRoot(document.body)
app.render(<Page />)
