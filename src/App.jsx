import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import the new Navbar
import Homepage from './pages/Homepages/Homepage.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Homepage/>
       
      <Footer/>
      
    </div>
  );
}

export default App;