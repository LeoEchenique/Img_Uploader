import React from "react";
import style from "./buton.module.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";





export default function Button({home}) {
    
   
    const [images, setImages] = useState();




    return (
        
        <div className={style.div_container}>
            {home === false ? <Link className={style.all} to="/all">  All images  </Link> : home === true ?  <Link to="/" className={style.all}> Home </Link>  : null }
      
           
        </div>
    )
}