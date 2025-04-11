import React from "react";

const LeftSection = ({
  imgURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container my-5 pt-5">
      <div className="row ">
        <div className="col-6 mx-auto">
          <img style={{ width: "80%" }} src={imgURL} alt="img" />
        </div>
        <div className="col-4 mx-auto mt-5 pt-4">
          <h1>{productName}</h1>
          <p
            style={{ fontSize: "18px", lineHeight: "1.8", fontWeight: "400" }}
            className="mt-4"
          >
            {ProductDescription}
          </p>
          <div className="row">
            {tryDemo && (
              <div className="col">
                <a
                  style={{ textDecoration: "none", fontWeight: "400" }}
                  href={tryDemo}
                >
                  Try demo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            )}
            {learnMore && (
              <div className="col">
                <a
                  style={{ textDecoration: "none", fontWeight: "400" }}
                  href={learnMore}
                >
                  Learn more <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            )}
          </div>
          <div className="row mt-3">
            <div className="col">
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" alt="google play" />
              </a>
            </div>
            <div className="col">
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" alt="appstore" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
