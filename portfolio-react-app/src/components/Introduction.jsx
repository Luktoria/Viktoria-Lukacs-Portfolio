import React from "react";
import "./stylesheets/Introduction.css"

function Introduction() {
    return (
        <>
            <div className="intro-container">
                <div className="intro-flex">
                    <div className="greeting">
                        <h1>Nice to meet you! I'm
                            <span>Viktória Lukács</span>
                        </h1>
                        <p>Based in the Netherlands, Haarlem, I'm a self-thought front-end developer looking for a good
                            oppurtunity to kickstart my career.</p>
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