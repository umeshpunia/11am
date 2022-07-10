import React from "react";

const categories = [
  {
    title: "tops",
    pic: "cat-1.jpg",
    nofp: "100",
  },
  {
    title: "tops",
    pic: "cat-1.jpg",
    nofp: "100",
  },
  {
    title: "tops",
    pic: "cat-1.jpg",
    nofp: "100",
  },
  {
    title: "tops",
    pic: "cat-1.jpg",
    nofp: "100",
  },
  
];

function HomeCats() {
  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories.map((c, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                  <div className="cat-item d-flex align-items-center mb-4">
                    <div
                      className="overflow-hidden"
                      style={{width: "100px", height: "100px"}}
                    >
                      <img className="img-fluid" src={`assets/img/cat-${i+1}.jpg`} alt="" />
                    </div>
                    <div className="flex-fill pl-3">
                      <h6>{c.title}</h6>
                      <small className="text-body">{c.nofp}</small>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeCats;
