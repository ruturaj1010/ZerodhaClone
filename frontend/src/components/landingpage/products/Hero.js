import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5 border-bottom">
      <div className="row my-5 text-center">
        <h1 style={{fontSize:"47px"}}>Zerodha Products</h1>
        <p className='fs-5 mt-1'>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <a style={{textDecoration:"none"}} href="#">investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  )
}

export default Hero