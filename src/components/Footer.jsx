import React from 'react'
import phone from '../images/icon-phone.svg'
import logo from '../images/logo2.svg'
import email from '../images/icon-email.svg'

const Footer = () => {
  return (
    <>
        <footer className='footy'>
            <div className='footer-class'>
                <div className='first-footer'>
                    <img src={logo} className="footer-logo" alt="footer-logo"/>
                    <div className='contact-phone'>
                        <img src={phone} className="phone"alt="phone-alt"/>
                        <p className='contact-paragraph'>Phone: +1-543-123-4567</p>
                    </div>
                    <div className='contact-email'>
                        <img src={email} className="email"alt="email-alt"/>
                        <p className='email-paragraph'>Email: example@flyo.com</p>
                    </div>
                </div>
                <ul className='first-links'>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
                <ul className='second-links'>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Terms</a></li>
                    <li><a href='#'>Privacy</a></li>
                </ul>
                <ul className='social-links'>
                    <li><i class="fa-brands fa-facebook-f social-icon"></i></li>
                    <li><i class="fa-brands fa-twitter social-icon"></i></li>
                    <li><i class="fa-brands fa-instagram social-icon"></i></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer