import React from "react";
import { useState } from "react";
import style from "../entry/fileCss.module.css"
import Drag from "../drag&&drop/drag&drop.jsx"
import Loader from "../loading/Loader";
import Uploaded from "../finalStep/Uploaded";
import Buton from "../buttons/Butons.jsx"
import {Link} from "react-router-dom"

export default function FileUpload() {

    const [displayLoader,setDisplayLoader]=useState(false)
    const [displayFinal, setDisplayFinal] = useState(false)
    const [homeBut, setHomeBut] = useState(false);
    const [data, setData]=useState([])
        
 
    const setterLoader = () => {
        setHomeBut(null);
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
            {<Buton home={homeBut}  />}
            
            {displayLoader === false && displayFinal === false ? 
            
                 <Drag setterLoader={setterLoader} setterFinal={setterFinal} setterData={setterData} />
            
              : displayLoader === true && displayFinal === false ?
                <Loader />
                    : displayLoader === false && displayFinal === true ?
                              <Uploaded data={data} to="/success" />
                : null     }
        </div>
    )
}