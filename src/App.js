import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/JSX/Shop';
import Product from './Pages/JSX/Product';
import ShopCategory from './Pages/JSX/ShopCategory';
import Cart from './Pages/JSX/Cart';
import LoginSignup from './Pages/JSX/LoginSignup';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/phones' element = {<ShopCategory  category = "phones"/>}/>
        <Route path = '/laptops' element = {<ShopCategory  category = "laptops"/>}/>
        <Route path = '/tablets' element = {<ShopCategory  category = "tablets"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productId' element={<Product/>}/> 
        </Route>
        <Route path = '/Cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
