import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 '>
      <div className='row text-center'>
        <img className='mb-5 mt-3 col-8 m-auto' src='./media/images/homehero.png' alt='This is img'/>
        <h1 className='mt-5 fs-1'>Invest in everything</h1>
        <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
        <button className='p-2 btn btn-primary rounded fs-5' style={{ width:"15%", margin: "0 auto"}}>Signup now</button>
      </div>
    </div>
  )
}

export default Hero; 