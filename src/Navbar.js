import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="displayimage">
                <img src="./assets/DivyeGupta.jpeg" alt="" />
            </div>
            <div className="name">
                <p>Divye Gupta</p>
            </div>
            <div className="pages">
                <Link to = '/'> <h3>About</h3></Link>
                <Link to = '/projects'> <h3>Projects</h3></Link>
                <Link to = '/contact'> <h3>Contact Me</h3></Link>
                <div className="gap">
                <Link to = '/CV'> <h3>My CV</h3></Link>
                <Link to = '/podcast'>  <h3>My Podcast</h3></Link>
                </div>
            </div>
            <div className="contactlinks">
                <>
                <h5>Get in Touch</h5>
                <a href="mailto: divyegupta00@gmail.com"><EmailIcon/></a>
                <a href="https://github.com/divye-gupta"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/divye-gupta-00/"><LinkedInIcon/></a>
                <a href="tel:9871628408"><PhoneIcon/></a>
                </>
            </div>
        </div>
        <div className="navbarmob">
        <div className="displayimagemob">
                <img src="./assets/DivyeGupta.jpeg" alt="" />
        </div>
            <div className="pagesmob">
                <Link to = '/'> <h3 className="words">About</h3></Link>
                <Link to = '/projects'> <h3 className="words">Projects</h3></Link>
                <Link to = '/contact'> <h3 className="words">Contact Me</h3></Link>    
                <Link to = '/CV'> <h3 className="words">My CV</h3></Link>
                <Link to = '/podcast'>  <h3 className="words">My Podcast</h3></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;
