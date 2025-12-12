import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import Homecard1 from '../../components/Home/Homecard1';
import Homecard2 from '../../components/Home/Homecard2';
import Homecard3 from '../../components/Home/Homecard3';

const Homepage = () => {

    return (
        <>
        {/* Fixed positioning and high z-index to ensure it's always on top */}
       <HeroSection/>
       <Homecard1/>
       <Homecard2/>
       <Homecard3/>
        </>
    );
}

export default Homepage;