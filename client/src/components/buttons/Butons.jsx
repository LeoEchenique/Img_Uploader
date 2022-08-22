import React from "react";
import style from "./buton.module.css";
import { Link } from "react-router-dom";





export default function Button({home}) {
    



const handleClick = () => {
   /*  window.location = "/"; */
    window.location("/")
}
    return (
        
        <div className={style.div_container}>
            {home === false ? <Link className={style.all} to="/all">  All images  </Link> : home === true ?  <Link to="/" onClick={handleClick} className={style.all}> Home </Link>  : null }
      
           
        </div>
    )
}