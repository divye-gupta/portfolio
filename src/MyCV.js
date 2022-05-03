import React from 'react'
import './css/MyCV.css'

const MyCV = () => {
    return (
        <div className = "mycvmain" >
            <iframe title='CV' src="https://drive.google.com/file/d/1YHup9CjZNQ6JWxplrJG17OHXY_EcpI_Q/preview" width="640" height="780" allow="autoplay"></iframe>   
            <a href='https://drive.google.com/file/d/1YHup9CjZNQ6JWxplrJG17OHXY_EcpI_Q/view?usp=sharing'><button>Download CV</button></a> 
        </div>
    )
}

export default MyCV
