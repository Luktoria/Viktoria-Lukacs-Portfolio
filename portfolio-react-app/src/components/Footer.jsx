import React from "react";
import './stylesheets/Footer.css'

function Footer(){
    return (
        <>
        <div id="contacts" className="contacts">
        <div>
            <h3>CONTACT</h3>
            <p>You can find me in any of these contact forms.</p>
        </div>

          <div className="contact-info-div">
            <div className="contact-info">
                <img className="icon"  src="/phone-beige.svg" alt="phone icon" />
                <p className="phone">+31653998034</p>
            </div>

            <div className="contact-info">
                <img className="icon"src="/envelope-beige.svg" alt="envelope icon" />
                <p id="email" className="email">lukacs.viktoria98@gmail.com</p>
            </div>

            <div className="contact-info">
                <img className="icon" src="/linkedin-beige.svg" alt="linkedin icon" />
                <a>https://www.linkedin.com/in/viktoria-lukacs/</a>
            </div>

            <div className="contact-info">
                <img className="icon" src="/github-beige.svg" alt="github icon" />
                <a>https://github.com/Luktoria</a>
            </div>

        </div>
        </div>
        </>
    )
}

export default Footer;