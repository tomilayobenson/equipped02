import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import PostAnItem from "./pages/PostAnItem";
import PurchaseListings from "./pages/PurchaseListings";
import RentalListings from "./pages/RentalListings";
import ProductDetails from "./pages/ProductDetails";
import './App.css';

function App() {
  return (
    // <div className="App">
      <Routes>
                <Route path='/' element={<Home />} />
                <Route path='post-an-item' element={<PostAnItem />} />
                <Route path='how-it-works' element={<HowItWorks />} />
                <Route path='purchase-listings' element={<PurchaseListings />}/>
                <Route path='Rental-listings' element={<RentalListings />}/>
                <Route
                    path='products/:ProductId'
                    element={<ProductDetails />}
                />
      </Routes>
      
    // </div>
  );
}

export default App;
