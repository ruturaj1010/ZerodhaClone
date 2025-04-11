import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center my-5 py-5">
        <h1 style={{fontSize:"44px"}}>Charges</h1>
        <p className='text-muted fs-5 mt-3'>List of all charges and taxes</p>
      </div>

      <div className="row p-5">
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricing0.svg" alt="img" />
          <h1 className='fs-3 mb-3'>Free equity delivery</h1>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/intradayTrades.svg" alt="img" />
          <h1 className='fs-3 mb-3'>Intraday and F&O trades</h1>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricingMF.svg" alt="img" />
          <h1 className='fs-3 mb-3'>Free direct MF</h1>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero