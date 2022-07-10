import React from "react";

const featured = [
  { title: "Quality Products", icon: "fa-check" },
  { title: "Free Shipping", icon: "fa-shipping-fast" },
  { title: "14-Days Return", icon: "fas fa-exchange-alt" },
  { title: "24/7 Support", icon: "fa-phone-volume" },
];

function FeaturedSection() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {featured.map((v, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center bg-light mb-4"
                  style={{ padding: "30px" }}
                >
                  <h1 className={`fa ${v.icon} text-primary m-0 mr-3`}></h1>
                  <h5 className="font-weight-semi-bold m-0">{v.title}</h5>
                </div>
              </div>
            );
          })}   
        </div>
      </div>
    </>
  );
}

export default FeaturedSection;
