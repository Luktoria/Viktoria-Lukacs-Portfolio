import React from "react";

function Main(props){
    return(
        <>
        <p>{props.desc}</p>
        <img src={props.img} alt="" />
        </>
    )
}

export default Main;