import React from "react";

const RightSection = ({
  ProductName,
  ProductDescription,
  productlink,
  imgURL,
}) => {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-3 mx-auto mt-5 pt-5">
          <h1 className="mt-5">{ProductName}</h1>
          <p className="mt-4">
            {ProductDescription}
          </p>
          <a className="fs-6" style={{ textDecoration: "none" }} href={productlink}>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6 mx-auto">
          <img style={{width:"95%"}} src={imgURL} alt="console" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
