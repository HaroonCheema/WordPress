import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div
        className="row py-md-5 justify-content-end bg-image text-light mx-0"
        style={{
          backgroundColor: '#090218'
        
        }}
      >
        <div className="py-3 py-sm-3 py-md-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ps-5">
          <h3 className="text-decoration-underline">Contact Info</h3>
          <div className="footer-1">
            <h6 className="pt-2 fw-bold">
              <i
                className="fal fa-phone-volume pe-3"
                style={{ color: '#c6064c' }}
              ></i>
              Hotline:
            </h6>
            <h6 className="ps-5">Phone: +61-821-456</h6>
          </div>
          <div className="footer-1">
            <h6 className="pt-2 fw-bold">
              <i
                className="fal fa-envelope pe-3"
                style={{ color: '#c6064c' }}
              ></i>
              Email:
            </h6>
            <h6 className="ps-5">hello@vaximo.com</h6>
          </div>
          <h6 className="pt-2 fw-bold">
            <i
              className="far fa-map-marker-plus pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Address:
          </h6>
          <h6 className="ps-5">123,Western Road,Melbourne Australia</h6>
        </div>

        <div className="py-3 py-sm-3 py-md-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ps-5">
          <h3 className="text-decoration-underline">Services Links</h3>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Treat Hunter
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Incident Responder
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Secure Managed IT
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Compliance
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Cyber Security
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Disaster Planning
          </h6>
        </div>

        <div className="py-3 py-sm-3 py-md-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ps-5 ps-lg-3">
          <h3 className="text-decoration-underline">Quick Support</h3>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Contact Us
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            FAQ
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Privacy Policy
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Terms & Conditions
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Team
          </h6>
        </div>

        <div className="py-3 py-sm-3 py-md-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ps-5 ps-lg-0">
          <h3 className="text-decoration-underline">Quick Links</h3>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            About
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Services
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Testimonials
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            COntact Us
          </h6>
          <h6 className="pt-2 footer-1">
            <i
              className="fas fa-chevron-double-right pe-3"
              style={{ color: '#c6064c' }}
            ></i>
            Pricing
          </h6>
        </div>
      </div>
      {/* Copy Rights */}
      <div
        className="container-fluid"
        style={{ backgroundColor: '#05224c' }}
      >
        <div className="row justify-content-between ps-md-5 ms-md-3 py-3 text-light">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h5 className="fw-bold">
              Copyright @2022 <span className="header1">SSLs.Pk</span> .All
              Rights Reserved.
            </h5>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 ms-md-5 ">
            <h5 className="fw-bold">
              <span className="header1">Terms & Conditions</span> -{' '}
              <span className="header1">Privacy Policy</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
