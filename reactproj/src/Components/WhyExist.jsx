import React, { Fragment } from "react";

const styles ={
    outercontainer: {
        display: "flex",
        alignItems:"center",
        paddingTop:"8rem",
        paddingBottom:"8rem",
        background: "#f3f3f3"
    }
}

const WhyExist = () => {
    return (
        <Fragment>
            <div style={styles.outercontainer}>
                <div className="left-sec">
                    <h2>Why we exist</h2>
                    <br></br>
                    <p>The world is changing, and we want India to be ready. We're here to make sure that everyone has access to the knowledge required to set the course for a better future.</p>
                </div>
                <div className="right-sec">
                    <h2>How we achieve it</h2>
                    <br></br>
                    <p>At TinkerHub, we take pride in learning on our own and from peers. That's right! We also have a fun team of super cool mentors who take you from beginner to 
                    super-coder and collaborator - with tons of help from you, of course!</p>
                </div>
            </div>
        </Fragment>
    )
}

export default WhyExist;