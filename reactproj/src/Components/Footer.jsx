import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";


const styles = {
    outercontainer: {
        display:"grid",
        gridTemplateColumns:"repeat(6,1fr)",
        gap:"3.75rem",
        marginTop:"2rem"
    },
    menu_title: {
        color: "#7c7c7c",
        fontSize: ".875rem",
        marginBottom: ".5rem",
        fontWeight: "500"
    },
    footer_child_item: {
        marginTop:"0.5rem"
    }
}

const Footer = () => {
    return (
        <Container>
            <div className="footer-logo">
                <img width={150} src="../../src/assets/images/LogoBLACK.png" alt="logo"></img>
            </div>
            <div className="menu-outer" style={styles.outercontainer}>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Connect</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">About</a></li>
                        <li style={styles.footer_child_item}><a href="#">Contact</a></li>
                        <li style={styles.footer_child_item}><a href="#">Impact Reports</a></li>
                    </ul>
                </div>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Get to know</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">Why TinkerHub</a></li>
                        <li style={styles.footer_child_item}><a href="#">Blog</a></li>
                        <li style={styles.footer_child_item}><a href="#">Newsletter</a></li>
                        <li style={styles.footer_child_item}><a href="#">Understanding Non Profits</a></li>
                    </ul>
                </div>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Transparency</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">Community Guideline</a></li>
                        <li style={styles.footer_child_item}><a href="#">Donation Refund Policy</a></li>
                        <li style={styles.footer_child_item}><a href="#">Privacy Policy</a></li>
                        <li style={styles.footer_child_item}><a href="#">Financial Reports</a></li>
                    </ul>
                </div>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Get Involved</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">Donate to the Cause</a></li>
                        <li style={styles.footer_child_item}><a href="#">TinkerSpace Patrons</a></li>
                    </ul>
                </div>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Work at TinkerHub</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">Job Openings</a></li>
                    </ul>
                </div>
                <div className="menu-group">
                    <h5 style={styles.menu_title}>Programs</h5>
                    <ul>
                        <li style={styles.footer_child_item}><a href="#">Saturday Hacknight</a></li>
                        <li style={styles.footer_child_item}><a href="#">IndieDevs</a></li>
                        <li style={styles.footer_child_item}><a href="#">Tech4Good Bootcamp</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Footer;