import React from 'react'

const Access = () => {
  return (
    <>
     <div className='access-section'>
        <div className='access-today'>
            <h2 className='access-headings'>
                Get early access today 
            </h2>
            <p className='access-paragraph'>
                It only take a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help to you.
            </p>
        </div>
        <div className='access-form'>
            <input type='email'name='email'id='email'placeholder='email@example.com'/>
            <p className='requirements'>Please check your email</p>
            <button className='btn-form'>Get started for free</button>
        </div>
     </div>
     <p className='requirements'>Please check your email</p>
    </>
  )
}
export default Access