import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '../src/adapters/primary/ui/components/App'
import './index.css'
// import SignIn from './adapters/primary/ui/components/SignIn'
import SignUp from './adapters/primary/ui/components/SignUp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
