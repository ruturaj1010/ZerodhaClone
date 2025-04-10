import React from "react";

const Footer = () => {
  return (
    <footer className="border-top" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container p-4 mt-3">
        <div className="row mb-4">
          <div className="col">
            <img
              style={{ width: "50%" , marginBottom:"15px" }}
              src="media/images/logo.svg"
              alt="logo "
            />
            <p>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
            <div className="flex fs-5">
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-solid fa-x"></i>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <hr style={{ width: "60%" }} />
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  marginRight: "10%",
                }}
                href="#"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <ul
              style={{ listStyle: "none", fontSize: "17px", fontWeight: "7px" }}
            >
              <h4 className="fs-4 mb-3">Company</h4>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  About
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Products
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Referral programme
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Careers
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Open source
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Press & media
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Zerodha Cares (CSR)
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul
              style={{ listStyle: "none", fontSize: "17px", fontWeight: "7px" }}
            >
              <h4 className="fs-4 mb-3">Support</h4>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Support portal
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  List of charges
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Downloads and resources
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Videos
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Market overview
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Status of your complaints
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul
              style={{ listStyle: "none", fontSize: "17px", fontWeight: "7px" }}
            >
              <h4 className="fs-4 mb-3">Account</h4>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Open an account
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "gray" }} href="#">
                  Fund transfer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-muted" style={{ fontSize: "13px" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p className="text-muted" style={{ fontSize: "13px" }}>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p style={{ fontSize: "13px" }}>
          <a style={{ textDecoration: "none" }} href="#">
            Smart Online Dispute Resolution
          </a>{" "}
          |{" "}
          <a style={{ textDecoration: "none" }} href="#">
            Grievances Redressal Mechanism
          </a>
        </p>

        <p className="text-muted" style={{ fontSize: "13px" }}>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="text-muted" style={{ fontSize: "13px" }}>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p className="text-muted" style={{ fontSize: "13px" }}>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>

        <div className="flex m-auto">
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            NSE
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            BSE
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            MCX{" "}
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            Terms & conditions
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            Policies & procedures
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            Privacy policy
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            Disclosure
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            For investor's attention
          </a>
          <a
            style={{
              marginLeft: "25px",
              textDecoration: "none",
              color: "gray",
            }}
            href="#"
          >
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
