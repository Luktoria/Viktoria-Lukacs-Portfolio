import React, { useState } from "react";
import "./stylesheets/Introduction.css";
import LongIntro from "./LongIntro";




function Introduction() {
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <>
            <div className="intro-container">
                <div className="intro-flex">
                    <div className="greeting">
                        <div className="short-introduction">
                            <h1>Nice to meet you! I'm
                                <span className="me">Viktória Lukács,</span>
                            </h1>
                            <p>A junior front-end developer based in Haarlem, the Netherlands.</p>
                            <span className="link"><a href="#contacts">CONTACT</a></span>
                            <div className="button-container">
                                {isOpened ?
                                    <button onClick={toggle} className="about-button close">
                                        <span>CLOSE</span>
                                        <span><img src="./arrow-up.svg" alt="icon-dropup" /></span>
                                    </button>
                                    :
                                    <button onClick={toggle} className="about-button">
                                        <span>ABOUT ME</span>
                                        <span><img src="./arrow-down.svg" alt="icon-dropdown" /></span>
                                        </button>
                                }
                            </div>
                        </div>

                        <LongIntro
                            isOpened={isOpened}
                        ></LongIntro>

                    </div>

                    <div>
                        <img className="img-of-me" src="./IMG_5009.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;