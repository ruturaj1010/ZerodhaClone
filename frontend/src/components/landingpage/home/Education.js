import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row p-5">
        <div className="col-6">
          <img style={{width:"80%"}} src="media/images/education.svg" alt="img" />
        </div>

        <div className="col-6 mt-4">
          <h2 className='mb-4 fs-2'>Free and open market education</h2>
          <p className='fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

          <a style={{textDecoration:"none"}} href="#">Varsity <i class="fa-solid fa-arrow-right"></i></a>

          <p className='mt-4 fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

          <a style={{textDecoration:"none"}} href="#">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education;