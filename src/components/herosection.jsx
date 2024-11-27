import { useState } from "react";
import '../css/navbar.css'
import HeroImg from '../assets/illustration-working.svg'

function Hero () {
    return (
        <>
            <section className="Hero">
                <div className="Text-section">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed </p>
                    <p>insights on how your links are performing.</p>
                    <button>Get Started</button>
                </div>
                <div className="img-section">
                    <img src={HeroImg} alt="Illustration of someone working" />
                </div>
            </section>
        </>
    )
}

export default Hero