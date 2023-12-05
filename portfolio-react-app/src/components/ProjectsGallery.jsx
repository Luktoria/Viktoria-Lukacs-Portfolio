import React from "react";
import "./stylesheets/ProjectsGallery.css";

function Main(props){
    return(
        <>
        <div className="project-card">
        
        <a href={props.site}><div className="background-img" style={{ backgroundImage: `url(${props.img})`}}></div></a>
        {/* <img src={props.img} alt="" /> */}
        <h2>{props.title}</h2>
        <p><span>{props.html + "  " + props.css + "  " + props.javascript}</span></p>
        <span className="website"><a href={props.site}>VISIT PROJECT</a></span>
        <span className="code"><a href={props.code}>VIEW CODE</a></span>
        </div>
        </>
    )
}

export default Main;