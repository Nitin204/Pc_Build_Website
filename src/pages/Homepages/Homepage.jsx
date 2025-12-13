import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import Homecard1 from '../../components/Home/Homecard1';
import Homecard2 from '../../components/Home/Homecard2';
import Homecard3 from '../../components/Home/Homecard3';
import Homecard4 from '../../components/Home/Homecard4';
import Homecard5 from '../../components/Home/Homecard5';
import Homecard6 from '../../components/Home/Homecard6';
import HomeReview from '../../components/Home/HomeReview';
import HomeLast from '../../components/Home/HomeLast';

const Homepage = () => {

    return (
        <>
        {/* Fixed positioning and high z-index to ensure it's always on top */}
       <HeroSection/>
       <Homecard1/>
       <Homecard2/>
       <Homecard3/>
       <Homecard4/>
       <Homecard5/>
       <Homecard6/>
       <HomeReview/>
       <HomeLast/>
            
        </>
    );
}

export default Homepage;
