import React, { Fragment } from "react";

const styles ={
    outercontainer: {
        paddingTop:"8rem",
        paddingBottom:"8rem",
    },
    section_container: {
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"3.75rem",
        marginTop:"3rem"
    },
    font_set: {
        fontSize: "1.9rem"
    }
}


const ImpactNumbers = () => {
    return (
        <Fragment>
            <div style={styles.outercontainer}>
                <h2 style={{fontSize:"3.5rem"}}>TinkerHub Impact In Numbers</h2>
                <p style={{fontSize:"1.25rem",color:"#7c7c7c"}}>What we have achieved over years</p>
                <div className="counter-outer" style={styles.section_container}>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>15,000+</h2>
                        </div>
                        <h3 style={styles.font_set}>Members</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>70+</h2>
                        </div>
                        <h3 style={styles.font_set}>Campus Chapters</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>8+</h2>
                        </div>
                        <h3 style={styles.font_set}>Years</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>20+</h2>
                        </div>
                        <h3 style={styles.font_set}>Partners</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>1000+</h2>
                        </div>
                        <h3 style={styles.font_set}>Events</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>5000+</h2>
                        </div>
                        <h3 style={styles.font_set}>Projects</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>100+</h2>
                        </div>
                        <h3 style={styles.font_set}>Career Opportunities</h3>
                    </div>
                    <div className="section-feature">
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"7px"
                        }}>
                            <img width={40} src="../../src/assets/images/businessman.png" alt="icon"></img>
                            <h2 style={styles.font_set}>50+</h2>
                        </div>
                        <h3 style={styles.font_set}>Hiring Companies</h3>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default ImpactNumbers;