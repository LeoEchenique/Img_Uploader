import React from "react";
import style from "../drag&&drop/drag.module.css"
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
/* import RingLoader from "react-spinners/RingLoader"; */
import { useEffect } from "react";
/* import Loading from "../loading/Loader.jsx";
import Uploaded from "../finalStep/Uploaded.jsx"; */
/* import img from "../img.png"; */
import imagen from "../image.svg";

export default function Drag({setterLoader, setterFinal, setterData}) {

    const ref = useRef(null);
    
    const PORT = "https://tranquil-depths-32422.herokuapp.com/";
    const [files, setFiles] = useState([]);
    //  const [fileName, setFileName] = useState([]);
    
    const [uploadedFiles, setUploadedFiles] = useState([]); // arr of objects
//     const [loading, setLoading] = useState(false);
//    const [display,setDisplay]=useState(false)  

  
    useEffect(() => {
      
        if (files.length) {
            setterLoader()
            handleSubmit()
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files])


   

    const handleDrop = (e) => {
       
        
        e.preventDefault();
     /*    setUploadedFiles([])
        setFileName([]) */
        setFiles([])
        
        Array.from(e.dataTransfer.files).forEach(img => {
            setFiles((prev)=>[...prev, img])
           /*  setFileName([img.name]) */
        })
        
    }

    const handleSubmit = async () => {
       
        if (files?.length) {
      
           let result = files.map(async (img) => {
            
                let formData = new FormData();
                formData.append("file", img);
                formData.append("upload_preset", "zcgk2l4m");
                let res = await axios.post("https://api.cloudinary.com/v1_1/leo-echenique/image/upload", formData);
                setUploadedFiles((prev)=>[...prev, res.data.url])
                setterData(res.data.url)
               axios.post(`${PORT}upload`, {  name: res.data.url}) 
              
           }) 
           
            await Promise.all(result);
            console.log(uploadedFiles, "ere")
            setterFinal()
        }
         
    };

    const handleDrop2 = (e) => {
        e.preventDefault();
      /*   setUploadedFiles([])
        setFileName([]) */
        setFiles([]) 
        Array.from(e.target.files).forEach( img => {
            setFiles((prev)=>[...prev, img])
              /*  setFileName([img.name]) */
        })
  
      
}


    return (
        

        <div className={style.container}>
            <h3 className={style.h3}>Upload your image</h3>
         
            <span className={style.support} >Supports: Jpeg, Jpg, Png..</span>
            <div className={style.Drag}  onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
                <div className={style.icon} >
                <img src={imagen} alt="" />
                </div>
                <span className={style.header}> Drag & Drop your image here</span>
               
                <span className={style.or}>Or </span>
               
            </div>
            <input ref={ref} multiple className={style.filename} id="filename" onChange={handleDrop2} type="file"></input> 
            <label htmlFor="filename" className={style.labelfile}> Choose a file </label>
   
          
        </div>
    )
}