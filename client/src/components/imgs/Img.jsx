import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import style from "./img.module.css";
import Buton from "../buttons/Butons"
export default function Img() {
    
    const [images, setImages] = useState();

    useEffect( () => {
        
       axios.get("https://tranquil-depths-32422.herokuapp.com/")
           .then(res => {
             setImages(res.data)
       })
        
        
    }, [])

    return (
        <div>
            <div className={style.buton} >
            <Buton home={true}  />
            </div>
            
            <h1 className={style.title}>All the images are uploaded by the users</h1>
            <div className={style.img_container}>
          
            {
                images?.length ?
                    images.map(e => {
                        return (
                            <div key={e.id} className={style.card}>
                                <img  key={e.id} className={style.img}  src={e.name} alt="" />
                            </div>
                     ) 
                    })
                    : null
            } 
        </div>

        </div>
       

    )
}