import React from 'react';
import HeroSection from '../componenets/HeroSection';
import About from '../componenets/About';
import Qualities from '../componenets/Qualities';
import Menu from '../componenets/Menu';
import WhoAreWe from '../componenets/WhoAreWe';
import Team from '../componenets/Team';
import Reservation from '../componenets/Reservation';
import Footer from '../componenets/Footer';

const Home = () => {
    return (
        <>
       <HeroSection/>
       <About/>
       <Qualities/>
       <Menu/>
       <WhoAreWe/>
         <Team/>
         <Reservation/>
         <Footer/>
        </>
    )
}
export default Home;