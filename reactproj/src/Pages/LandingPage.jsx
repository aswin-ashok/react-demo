import React, { Fragment } from "react"
import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection";
import WhyExist from "../Components/WhyExist";


const LandingPage = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <WhyExist />
        </Fragment>
    );
}

export default LandingPage;
