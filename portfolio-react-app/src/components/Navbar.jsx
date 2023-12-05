import React from "react";
import "./stylesheets/Navbar.css"



function Header(){
    return(
        <>
        <nav>
    <a href="https://www.linkedin.com/in/viktoria-lukacs"><img src="/linkedin-beige.svg" alt="icon-to-linkedin" onMouseOver={e => (e.currentTarget.src="/linkedin-white.svg")} onMouseLeave={e => (e.currentTarget.src="/linkedin-beige.svg")}/></a>

    <a href="https://luktoria.github.io/Portfolio/#email"><img src="/envelope-beige.svg" alt="icon-to-contacts" onMouseOver={e => (e.currentTarget.src="/envelope-white.svg")} onMouseLeave={e => (e.currentTarget.src="/envelope-beige.svg")}/></a>

    <a href="https://github.com/Luktoria"><img src="/github-beige.svg" alt="icon-to-github" onMouseOver={e => (e.currentTarget.src="/github-white.svg")} onMouseLeave={e => (e.currentTarget.src="/github-beige.svg")}/></a>
    </nav>
        </>
    )
}

export default Header;