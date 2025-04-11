import React from "react";

const Universe = () => {
  return (
    <div className="container p-5 mb-5">
      <p className="text-center fs-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a style={{ textDecoration: "none" }} href="#">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <div style={{fontSize:"14px"}} className="row text-center">
        <h1 className="fs-2 mt-5">The Zerodha Universe</h1>
        <p className="fs-6 mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mt-3 text-muted">
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/zerodhaFundHouse.png" alt="img" />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/sensibullLogo.svg" alt="img" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/goldenpiLogo.png" alt="img" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div style={{fontSize:"14px"}} className="row text-muted">
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/streakLogo.png" alt="img" />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/smallcaseLogo.png" alt="img" />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:"50%", height:"45%", marginBottom:"10px"}} src="media/images/dittoLogo.png" alt="img" />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        <button className="col-2 mx-auto fs-5 btn btn-primary p-2">Sign up now</button>
      </div>
    </div>
  );
};

export default Universe;
