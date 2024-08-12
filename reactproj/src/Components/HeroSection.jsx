import React, { Fragment } from "react";

const styles ={
    outercontainer: {
        display: "flex",
        alignItems:"center",
        paddingTop:"8rem"
    },
    hero_subtitle: {
        fontSize: "1.25rem",
        color:"#7c7c7c"
    },
    button_1: {
        background:"#171717",
        padding:"1rem 2.5rem",
        borderRadius:"8px",
        color: "#fff",
        border: "none"
    },
    button_2: {
        padding:"1rem 2.5rem",
        borderRadius:"8px",
        border: "none"
    }
}

const HeroSection = () => {
    return (
        <Fragment>
            <div style={styles.outercontainer}>
                <div className="left-sec">
                    <h1 style={{fontSize: "3.5rem"}}>TinkerHub Foundation</h1>
                    <br></br>
                    <p style={styles.hero_subtitle}>Non-Profit Organisation aimed at making use of 21st-Century Technologies and 
                    Learning Methods to foster a fresh breed of highly skilled young people empowered with technical and social skills.</p>
                    <br></br>
                    <p style={styles.hero_subtitle}>We’re a community of tinkerers, makers, policy geeks & students, and are working towards mapping and empowering people who share a passion to innovate.</p>
                    <div style={{
                        marginTop:"20px",
                        display: "flex",
                        gap: "20px"
                    }}>
                        <button style={styles.button_1}>Join the community</button>
                        <button style={styles.button_2}>Explore TinkerSpace</button>
                    </div>
                </div>
                <div className="right-sec">
                    <img width={500} src="../../src/assets/images/banner-image.svg" alt="banner-image"></img>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroSection;