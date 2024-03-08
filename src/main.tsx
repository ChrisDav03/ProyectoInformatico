import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/adapters/primary/ui/components/App'
import './index.css'
import SignIn from './adapters/primary/ui/components/SignIn'
import SignUp from './adapters/primary/ui/components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);