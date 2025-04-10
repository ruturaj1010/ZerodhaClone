import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import HomePage from './components/landingpage/home/HomePage';
import Signup from './components/landingpage/signup/Signup';
import AboutPage from "./components/landingpage/about/AboutPage"
import ProductsPage from "./components/landingpage/products/ProductsPage"
import PricingPage from "./components/landingpage/pricing/PricingPage"
import SupportPage from "./components/landingpage/support/SupportPage"
import Navbar from './components/landingpage/Navbar';
import Footer from './components/landingpage/Footer';
import NotFound from './components/landingpage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
