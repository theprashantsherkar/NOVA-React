import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Id from './Pages/Id';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/aboutus' element={ <About/>} />
          <Route path='/:id' element={ <Id/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;