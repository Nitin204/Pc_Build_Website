import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Homepage from "./pages/Homepages/Homepage.jsx";
import BuildPc from "./pages/BuildPc/BuildPc.jsx";
import Prebuilts from "./pages/Prebuilts/PrebuiltsPages.jsx";
import AddOns from "./pages/AddOns/AddOns.jsx";
 import Support from "./pages/Support/Support.jsx";
// import Cart from "./pages/Cart/Cart.jsx";
// import Account from "./pages/Account/Account.jsx";

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
        
        </Routes>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
