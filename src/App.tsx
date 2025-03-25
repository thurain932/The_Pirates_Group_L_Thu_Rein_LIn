import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';
import Consultation from './pages/Consultation';
import AIConsultation from './pages/AIConsultation';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import RecyclePage from './pages/Recycle';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/add-product" element={
                  <ProtectedRoute>
                    <AddProduct />
                  </ProtectedRoute>
                } />
                <Route path="/consultation" element={
                  <ProtectedRoute>
                    <Consultation />
                  </ProtectedRoute>
                } />
                <Route path="/ai-consultation" element={
                  <ProtectedRoute>
                    <AIConsultation />
                  </ProtectedRoute>
                } />
                <Route path="/products" element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                } />
                <Route path="/services" element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                } />
                <Route path="/about" element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                } />
                <Route path="/contact" element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                } />
                <Route path="/recycle" element={
                  <ProtectedRoute>
                    <RecyclePage />
                  </ProtectedRoute>
                } />
                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                } />
                <Route path="/order-success" element={
                  <ProtectedRoute>
                    <OrderSuccess />
                  </ProtectedRoute>
                } />
                <Route path="/home" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } />
                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;