import { useState } from "react";
import Logo from "../assets/logo.svg"
import '../css/navbar.css'

function NavBar() {

    return (
        <>
            <section className="NavBar">
                <div className="logo-div">
                    <img src={Logo} alt="Logo" />
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="CTA">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </section>
        </>
    )
}

export default NavBar
