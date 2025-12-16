import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Homepage from "./pages/Homepages/Homepage.jsx";
import BuildPc from "./pages/BuildPc/BuildPc.jsx";
import Prebuilts from "./pages/Prebuilts/PrebuiltsPages.jsx";
import AddOns from "./pages/AddOns/AddOns.jsx";
 import Support from "./pages/Support/Support.jsx";
import Cart from "./pages/Cart/Cart.jsx";
 import Account from "./pages/Account/Login.jsx";
 import Reset from "./pages/Account/Reset.jsx";
 import Register from "./pages/Account/Register.jsx";

 import Careers from "./pages/Legel/Careers.jsx";
 import Refund from "./pages/Legel/Refund.jsx";
 import Term from "./pages/Legel/Term.jsx";
 import Policy from "./pages/Legel/Policy.jsx";
import Shipping from "./pages/Legel/Shipping.jsx";
import Privacy from "./pages/Legel/Privacy.jsx";


function App() {
  return (
    <Router>
      <div className="App">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE ROUTING */}
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Main Menu Routes */}
          <Route path="/buildpc" element={<BuildPc />} />
          <Route path="/prebuilts" element={<Prebuilts />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
          <Route path="/reset" element={<Reset />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />

          
         
          {/* 404 Page */}
          <Route path="*" element={<h1>404 Page Not Found</h1>}/>
        
        </Routes>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
