import React from 'react'
import ReactDOM from 'react-dom/client'
import { FrappeProvider } from "frappe-react-sdk";
import App from './App.jsx'
// import App from './blocks/SelectBlock.jsx'
import './index.css'
import Router from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrappeProvider url='https://dev.zaviago.com' tokenParams={{
      type: 'token',
      useToken: true,
      token: () => `2ad3412e27b5c61:1cf86d7f8a8a367`
    }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FrappeProvider>
  </React.StrictMode>,
)
