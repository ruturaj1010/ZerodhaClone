import React from 'react'

const Pricing = () => {
  return (
    <div className='container mt-5'>
      <div className="row p-5">
        <div className="col-4">
          <h1 className='mb-4'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

          <a style={{textDecoration:"none"}} href="#">See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <div className="row">
            <div className="col border p-4 text-center">
              <h1><i className="fs-2 fa-solid fa-indian-rupee-sign"></i> 0</h1>
              <p>Free equity delivery and <br></br> direct mutual funds</p>
            </div>
            <div className="col border p-4 text-center">
              <h1><i className="fs-2 fa-solid fa-indian-rupee-sign"></i> 20</h1>
              <p>Intraday F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing