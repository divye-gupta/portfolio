import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import './css/ContactMe.css'

const ContactMe = () => {
    return (
        <div className="contactMemain">
            <div className="color">
               <div className="email"><EmailIcon/> <h3>divyegupta00@gmail.com</h3> </div> 
                <div className="github"><GitHubIcon/>  <h3>github.com/divye-gupta</h3> </div> 
                <div className="linkedin"> <LinkedInIcon/>  <h3>linkedin.com/in/divye-gupta-00</h3> </div> 
                <div className="phone"> <PhoneIcon/>  <h3>+91 9871628408</h3> </div> 
            </div>
        </div>
    )
}

export default ContactMe
