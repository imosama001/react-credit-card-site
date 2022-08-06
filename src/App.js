import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/Signup';
function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path="/services" element={<Services/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/sign-up' element={<SignUp/>}/>
     </Routes>
     <Footer />
    </Router>

  );
}

export default App;
