import React from "react";

const CreateTicket = () => {
  return (
    <div className="container p-5">
      <p className="text-muted fs-5 mb-5">
        To create a ticket, select a relevant topic
      </p>
      <div className="row">
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-circle-plus"></i> Account opening</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">Resident individual</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Minor</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Non Resident Indian (NRI)</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Company, Partnership, HUF and LLP</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Glossary</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-user"></i> Your zerodha account</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">Your Profile</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Account modification</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Nomination</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Transfer and conversion of securities</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-chart-simple"></i> kite</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">IPO</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Trading FAQs</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Charts and orders</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Alerts and Nudges</a></li>
            <li><a style={{textDecoration:"none"}} href="#">General</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-wallet"></i> Funds</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">Add money</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Withdraw money</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Add bank accounts</a></li>
            <li><a style={{textDecoration:"none"}} href="#">eMandates</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-circle-notch"></i> Console</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">Portfolio</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Corporate actions</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Funds statement</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Reports</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Profile</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Segments</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h1 style={{fontWeight:"400", display:"flex", alignItems:"center", gap:"10px"}} className="fs-5"><i class="fa-solid fa-cookie"></i> Coin</h1>
          <ul style={{listStyle:"none", lineHeight:"1.8", fontWeight:"400"}}>
            <li><a style={{textDecoration:"none"}} href="#">Understanding mutual funds and Coin</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Coin app</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Coin web</a></li>
            <li><a style={{textDecoration:"none"}} href="#">Transactions and reports</a></li>
            <li><a style={{textDecoration:"none"}} href="#">National Pension Scheme (NPS)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
