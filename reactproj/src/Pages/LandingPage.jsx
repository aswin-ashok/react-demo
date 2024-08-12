import React, { Fragment } from "react"
import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection";
import WhyExist from "../Components/WhyExist";
import ImpactNumbers from "../Components/ImpactNumbers";
import Footer from "../Components/Footer";


const LandingPage = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <WhyExist />
            <ImpactNumbers />
            <Footer />
        </Fragment>
    );
}

export default LandingPage;
