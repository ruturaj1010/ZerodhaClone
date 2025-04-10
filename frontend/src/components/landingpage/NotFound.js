import React from 'react'

const NotFound = () => {
  return (
    <div style={{height:"60vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div className='text-center'> 
        <h1>404 Page not found</h1>
        <p className='fs-5'>Sorry, the page you are looking does not exists.</p>
      </div>
    </div>
  )
}

export default NotFound;