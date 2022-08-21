import React from "react";
import { useState } from "react";
import axios  from "axios";
import style from "../entry/fileCss.module.css"
import Drag from "../drag&&drop/drag&drop.jsx"
import Loader from "../loading/Loader";
import Uploaded from "../finalStep/Uploaded";
export default function FileUpload() {

    const [displayLoader,setDisplayLoader]=useState(false)
    const [displayFinal, setDisplayFinal] = useState(false)
    const [data, setData]=useState([])
        /* TODO: DEPLOY EN MONGO ATLAS */

    const setterLoader = () => {
        setDisplayLoader(true)
    }
    const setterFinal = () => {
        setDisplayLoader(false)
        setDisplayFinal(true)
    }

    const setterData = (el) => {
        setData((prev)=> [...prev, el])
    }
  
    return (


        <div className={style.div_container}>
            {displayLoader === false && displayFinal === false ? 
                <Drag setterLoader={setterLoader} setterFinal={setterFinal} setterData={setterData} />
              : displayLoader === true && displayFinal === false ?
                <Loader />
                    : displayLoader === false && displayFinal === true ?
                        <Uploaded data={data} />
                : null     }
        </div>
    )
}