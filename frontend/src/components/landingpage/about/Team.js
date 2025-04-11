import React from 'react'

const Team = () => {
  return (
    <div className="container my-5">
      <div className="row mx-auto">
        <h1 style={{color:"#424242"}} className='text-center fs-2 my-5' >People</h1>

        <div className='col-1'></div>
        <div className="col-4 text-center mt-5" style={{color:"#424242", marginLeft:"20px"}}>
          <img style={{width: "70%" , borderRadius:"100%"}} src="./media/images/nithinKamath.jpg" alt="img" />
          <h5 className='my-4'>Nithin Kamath</h5>
          <h6>Founder CEO</h6>
        </div>

        <div className="col-5 mt-5" style={{color:"#424242", lineHeight:"1.8"}}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  )
}

export default Team