import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#387ED1", color: "white", paddingBottom:"10vh" }}>
      <div
        style={{ width: "80%", margin: "0 auto" }}
        className="row mx-auto p-5 text-center fs-5"
      >
        <div style={{ fontWeight: "500", textAlign: "left" }} className="col-6">
          Support Portal
        </div>
        <div
          style={{ textDecoration: "underline", textAlign: "right" }}
          className="col-5"
        >
          Track tickets
        </div>
      </div>

      <div
        style={{ width: "80%", margin: "0 auto"}}
        className="row mx-auto px-5"
      >
        <div className="col-7">
          <h1 className="fs-4 mb-4 rounded">Search for an answer or browse help topics to create a ticket</h1>

          <input className="form-control mb-2 p-3" type="text" name="search" id="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />

          <p style={{display:"flex",justifyContent:"start", alignItems:"center", flexWrap:"wrap", gap:"15px",fontSize:"17px"}}>
            <a style={{color:"white"}} href="#">Track account opening</a>
            <a style={{color:"white"}} href="#"> Track segment activation</a>
            <a style={{color:"white"}} href="#"> Intraday margins</a>
            <a style={{color:"white"}} href="#">Kite user manual</a>
          </p>
        </div>
        <div style={{lineHeight:"1.3"}} className="col-5">
          <h4>Featured</h4>
          <ol className="fs-6">
            <li className="my-3"><a style={{color:"white"}} href="#">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
            <li><a style={{color:"white"}} href="#">Trading holiday on account of Dr. Baba Saheb Ambedkar Jayanti on April 14, 2025</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
