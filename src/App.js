
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Brands from './Components/Brands';
import Founders from './Components/Founders';
import Footer from './Components/Footer'
import About from './Components/About';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <>


    <Navbar/>
    
    
    <Routes>
  <Route path='/' element={ <HomePage/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/brands' element={ <Brands/>}></Route>
  <Route path='/founders' element={ <Founders/>}></Route>
  <Route path='/footer' element={<Footer/>}></Route>
  </Routes>
  
   
    
   
    </>
  );
}

export default App;
