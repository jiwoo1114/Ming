import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Sidebar from './components/shared/Sidebar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

function App() {
   return (
      <BrowserRouter>
         <Header />
         {/*<Sidebar />*/}
         {/*<Signup />*/}
         {<Login />}
         <Footer />
      </BrowserRouter>
   )
}

export default App
