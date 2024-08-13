import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";

const styles = {
  outercontainer: {
    paddingTop: "8rem",
    paddingBottom: "8rem",
    background: "#f3f3f3",
  },
  innercontainer: {
    display: "flex",
    alignItems: "center",
  },
};

const WhyExist = () => {
  return (
    <div style={styles.outercontainer}>
      <Container>
        <div style={styles.innercontainer}>
          <div className="row">
            <div className="col-6">
              <h2>Why we exist</h2>
              <br></br>
              <p>
                The world is changing, and we want India to be ready. We're here
                to make sure that everyone has access to the knowledge required
                to set the course for a better future.
              </p>
            </div>
            <div className="col-6">
              <h2>How we achieve it</h2>
              <br></br>
              <p>
                At TinkerHub, we take pride in learning on our own and from
                peers. That's right! We also have a fun team of super cool
                mentors who take you from beginner to super-coder and
                collaborator - with tons of help from you, of course!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyExist;
