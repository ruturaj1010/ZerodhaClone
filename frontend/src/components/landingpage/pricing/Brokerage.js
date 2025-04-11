import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-7">
          <a style={{ textDecoration: "none" }} href="#">
            <h3 className="fs-5 text-center mb-4">Brokerage calculator</h3>
          </a>
          <ul style={{lineHeight:"1.8", fontSize:"14px"}} className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a style={{ textDecoration: "none" }} href="#">
            <h3 className="fs-5 text-center mb-4">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
