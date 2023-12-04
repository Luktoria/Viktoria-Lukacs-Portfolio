import React from "react";
import "./Main.css";

function Main(props){
    return(
        <>
        <div className="project-card">
        
        <div className="background-img" style={{ backgroundImage: `url(${props.img})`}}></div>
        {/* <img src={props.img} alt="" /> */}
        <h2>{props.title}</h2>
        <p><span>{props.html + "  " + props.css + "  " + props.javascript}</span></p>
        <h5 className="website"><a href={props.site}>VISIT PROJECT</a></h5>
        <h5><a href={props.code}>VIEW CODE</a></h5>
        </div>
        </>
    )
}

export default Main;