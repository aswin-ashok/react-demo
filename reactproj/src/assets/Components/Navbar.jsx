import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>
            <div><img src="" alt="logo"></img></div>
            <div>
                <ul style = {{
                    padding:"0",
                    display:"flex",
                    gap:"10px",
                }}>
                    <li style={{listStyleType:"none"}}>Join</li>
                    <li style={{listStyleType:"none"}}>Initiatives</li>
                    <li style={{listStyleType:"none"}}>Projects</li>
                    <li style={{listStyleType:"none"}}>Learning Resource</li>
                    <li style={{listStyleType:"none"}}>Donate</li>
                    <li style={{listStyleType:"none"}}>Login</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Navbar;