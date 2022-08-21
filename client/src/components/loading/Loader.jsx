import React from "react";
import RingLoader from "react-spinners/RingLoader";
import style from "../loading/Loader.module.css"



export default function Loader({loading}) {
    
    return (
        <div className={style.container}>
        <label htmlFor={RingLoader} className={style.label}> Uploading your images... </label>
        <RingLoader loading={loading} size={150} className={style.loader} />
        </div>
    )
}