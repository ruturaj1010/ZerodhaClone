import React from 'react'

const Stats = () => {
  return (
    <div className='container mt-5 p-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <h2 className='mb-4'>Trust with confidence</h2>
          <h5 className='mb-2'>Customer-first always</h5>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h5 className='mb-2'>No spam or gimmicks</h5>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h5 className='mb-2'>The Zerodha universe</h5>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h5>Do better with money</h5>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        
        <div className='col-6 pt-5'>
          <img style={{width:"75%", margin:"0 0 0 10%"}} src="media/images/ecosystem.png" alt="This is an img" />
          <div className="row text-center">
            <div className="col-6">
              <a style={{textDecoration:"none"}} href="#">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-6">
              <a style={{textDecoration:"none"}} href="#">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;