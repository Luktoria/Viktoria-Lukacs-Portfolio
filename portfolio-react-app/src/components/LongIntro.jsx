import React from "react";
import "./stylesheets/LongIntro.css";
import { animated, useTransition } from '@react-spring/web'

function LongIntro(props) {
    const transition = useTransition(props.isOpened, {
        from: { x: 0, y: 200, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1},
        leave: { x: 0, y: 200, opacity: 0},
    });
  
    
    return (
        <>
            <div className="intro-body">
                    {transition ((style, item) => item ? <animated.div style={style} className="item"> 
                    <p>During my journey on becoming a front-end developer, I put much emphasis on understanding the core concepts of HTML, CSS and Javascript. With a strong foundation on the basics, I focus on writing accessible HTML, modern CSS practices and clean, non-repeating Javascript. I'm building my projects with both React.js and Vue.js, but I can easily adapt to whatever tools are required for my team.
                      As I delve deeper into the world of webdevelopment, I am seeking opportunities to further develop my skills, learn from experienced mentors, and make a meaningful impact on the ever-evolving field of front-end development. </p>
                    </animated.div> : '')}
            </div>
        </>
    );
}


export default LongIntro;