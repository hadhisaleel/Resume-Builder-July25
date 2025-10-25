import React from 'react'
import { CiMail } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div style={{height:'300px' , backgroundColor:'purple', color:'white',  }} 
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
    <h3>Contact Us</h3>
    <h5 className='fw-bolder'> <CiMail />hadhisaleel@gmail.com</h5>
    <h5><VscAccount />:994647756</h5>
    <h3>
      Contact With Us
    </h3>
    <h3><FaInstagram />  <FaFacebookSquare />  <FaLinkedin />
  
</h3>
<p>Designed and buid with  using react</p>
    </div>
  )
}

export default Footer
