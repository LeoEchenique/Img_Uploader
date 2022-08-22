import React from "react";
import style from "./Uploaded.module.css"
import icon from "./ok.png"

import Buton from "../buttons/Butons.jsx"


export default function Uploaded({data}) {


    const handleLabel = (e) => {
        console.log(window.location.href)
        let elem = document.getElementById(e.target.value)
        elem.style.background = "green";
        elem.innerText="Copied"
        navigator.clipboard.writeText(e.target.value)
        setTimeout(() => {
            elem.style.background = "";
            elem.innerText="Copy"  
        }, 2000);
    }


    return (
        <div>
            <Buton home={true} />
        <div className={style.container}>
            <div className={style.div_icon}>
                <img src={icon} alt="" className={style.img} />
            </div>
                 <h1 className={style.h3}>Uploaded successfully!</h1>  
            <div className={style.Drag}>
                {data?.length?
                    data.map(e => {
                        return <img className={style.img_loaded} src={e} alt="" />
                        
                    })
                    : null}
            </div>
            <div className={style.links}>
                {data?.length ?
                    
                    data.map(link => {
                        return (
                            <div className={style.link_container}>
                                <div className={style.span_container}>

                                <span name="span" className={style.span}>{link}</span>
                                </div >

                                <button value={link} id={link} className={style.labelcontainer} onClick={handleLabel} htmlFor="span">Copy</button>

                                </div>
                        )
                        
                    })
                    : null}
            </div>
            </div>
    </div>
    )
}