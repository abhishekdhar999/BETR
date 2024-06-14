
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Brands from './Components/Brands';
import Founders from './Components/Founders';
import Footer from './Components/Footer'
import About from './Components/About';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    <About></About>
    <Brands></Brands>
    <Founders></Founders>
    <Footer></Footer>
    </>
  );
}

export default App;
