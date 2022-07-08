import React from 'react'
import illustration1 from '../images/illustration-1.svg'
const Hero = () => {
  return (
    <>
     <div className='hero-class'>
        <div className='left'>
            <h2 className='hero-headings'>
                All your files in one secure location, accessible anywhere.
            </h2>
            <p className='hero-paragraph'>
                Fylo stores is your most important files in one secure location. Access 
                them whenever you need, share and collaborate with friends, family and co-workers
            </p>
            <form className='input-hero'>
                <input type="email" name="email"placeholder="Enter your email" required/>
                <button className="btn-class">Get started</button>
                <p className='requirements'>Please check your email</p>
            </form>
        </div>
        <div className='right'>
            <img src={illustration1} alt='hero-image' className='hero=image'/>
        </div>
     </div>
    </>
  )
}
export default Hero