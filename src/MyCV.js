import React from 'react'
import './css/MyCV.css'

const MyCV = () => {
    return (
        <div className = "mycvmain" >
            <iframe title = 'CV' src="https://drive.google.com/file/d/1afPfe1azuyBJ26-BctsJfNv0pU-h-gVW/preview" width="640" height="850" allow="autoplay"></iframe>  
            <a href='https://drive.google.com/file/d/1afPfe1azuyBJ26-BctsJfNv0pU-h-gVW/view'><button>Download CV</button></a> 
        </div>
    )
}

export default MyCV
