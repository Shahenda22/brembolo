import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Aboutpage from './Pages/Aboutpage.jsx';
import Footer from './Components/Footer.jsx';
import Contactpage from './Pages/Contactpage.jsx';
import Productspage from './Pages/Productspage.jsx';
import Signup from './Pages/Sign_up.jsx';
import Login from './Pages/Login.jsx';
import Getpremium from './Pages/Getpremium.jsx';
import ProductDetailsPage from './Components/Product.jsx';
function App() {
  return (
    <>
    <Nav/>
    <ProductDetailsPage/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
      <Route path="/products" element={<Productspage/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/LogIn" element={<Login/>}/>
      <Route path="/Getpremium" element={<Getpremium/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
