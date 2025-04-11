import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src="./media/images/largestBroker.svg" alt="img" />
        </div>

        <div className="col-6">
          <h1 className="m-2">Largest stock broker in India</h1>
          <p className="m-2">
            2+ million Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in:{" "}
          </p>
          <div className="row mt-3">
            <div className="col-6">
              <ul>
                <li>Future and options</li>
                <li>commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>
          <img style={{width:"95%"}} src="media/images/pressLogos.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
