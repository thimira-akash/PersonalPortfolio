import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href="https://www.instagram.com/" target="_blank"><Instagram className='socialMedia-link'/></a>
          <a href="https://twitter.com/?lang=en" target="_blank"> <Twitter  className='socialMedia-link'/></a>
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"><Facebook className='socialMedia-link' /></a>
          <a href='https://www.linkedin.com/in/thimira-akash-9a01251b3/' target="_blank"><LinkedIn className='socialMedia-link'/></a>
            
        </div>
        <p>&copy; 2023 Thimira Akash</p>
    </div>
  )
}

export default Footer