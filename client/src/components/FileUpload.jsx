import React from "react";
import { useState } from "react";
import axios  from "axios";
import style from "../components/fileCss.css";
import RingLoader from "react-spinners/RingLoader";

export default function FileUpload() {

    const [files, setFiles] = useState([]);
    const [fileName, setFileName] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]); // arr of objects
    const [loading, setLoading] = useState(false);
    const [display,setDisplay]=useState(false)

    const handleChange = (e) => {


    Array.from(e.target.files).forEach(img => {
        setFiles((prev) => [...prev, img])
        setFileName((prev)=> [...prev, img.name])
    })

    }
        /* TODO: DEPLOY EN MONGO ATLAS */
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (files.length) {
            let result = files.map(async (img) => {
            
                setLoading(true)
                let formData = new FormData();
                formData.append("file", img);
                formData.append("upload_preset", "zcgk2l4m");
                let res = await axios.post("https://api.cloudinary.com/v1_1/leo-echenique/image/upload", formData);
                axios.post("/upload", {link: res.data.url, name: res.data.original_filename  }) 
                setUploadedFiles(prev => [...prev, res.data.url]);
               
        })
            
            await Promise.all(result);
           
          
            setTimeout(() => {
                setLoading(false); 
                setDisplay(true)
            },1600);
        }
       
    };
    
        
    return (


        <div>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="files">Selecte Img </label>
                <input type="file" name="files" onChange={handleChange} multiple="multiple"/>
                <input type="submit" />
            </form>
            {fileName.length ? 
                fileName.map(file => {
                    
                let key = Math.random() * 32 / 5; 
                    return <h1 key={key}>{file}</h1>
                })
            : <h3>Added files will appear here</h3>}
            <div className="card_container">
          
                {uploadedFiles?.length ?
                    loading === true ? <RingLoader loading={loading} size={160} className="loader"/> 
                        :
                   display === true ?  uploadedFiles.map(img => <img key={img} className="imgs" src={img} alt="" />)
                    : null 
            : <p>image will appear here after loading</p>}  {/* acá viene el loader */}
            {/* {loading === true ? < PuffLoader loading={loading} size={150}  /> : null} */}
            </div>
         
        </div>
    )
}