import React from 'react';

export default function ChooseUs() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#010c16' }}>
        <div className="row justify-content-center py-5 text-light">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <img
              src="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/08/choose-img-1.png"
              alt="empty"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
            <h2 className="fw-bold py-2">Why Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel.
            </p>
            <h6 className="i-1">
              <i className="fas fa-check p-1 rounded-circle me-2"></i>
              Extemly low response time at all time
            </h6>
            <h6 className="i-1">
              <i className="fas fa-check p-1 rounded-circle me-2"></i>
              We are always ready for your growth
            </h6>
            <h6 className="i-1">
              <i className="fas fa-check p-1 rounded-circle me-2"></i>
              We understand security and compliance
            </h6>
            <button
              className="btn btn-1 rounded-0 fw-bold mt-4 py-2 px-4"
              type="submit"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
