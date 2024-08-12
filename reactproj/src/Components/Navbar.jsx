import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"1px solid #e2e2e2",
        padding:"1rem 0"
      }}>
        <div className="logo" style={{padding:"0.5rem 1rem"}}>
          <img width={100} src="../../src/assets/images/logoBLACK.png" alt="logo"></img>
        </div>
        <div>
          <ul
            style={{
              padding: "0",
              display: "flex",
            }}
          >
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Join</a>
            </li>
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Initiatives</a>
            </li>
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Projects</a>
            </li>
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Learning Resource</a>
            </li>
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Donate</a>
            </li>
            <li style={{ listStyleType: "none",padding:"0.5rem 1rem" }}>
                <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
