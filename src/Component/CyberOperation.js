import React from 'react';

export default function CyberOperation() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center pt-5 pb-4">
          {/* col # 1 */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <img
              src="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/hacker_1-1-1-1-1.jpg "
              alt="empty"
              className="img-fluid"
              // style={{ height: '480px' }}
            />
          </div>
          {/* col # 2 */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <h3 className="pt-1 fw-bold pb-3">
              24/7 Cybersecurity Operation Center
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse.
            </p>
            <div className="row">
              {/* row2 col # 1 */}
              <div className="col-md-6">
                <ul className="list-unstyled fw-bold">
                  <li
                    className="rounded my-3 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Managed Web Application
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    SIEM Threat Detection
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Content Delivery Network
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    24/7 Hours services
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Security Management
                  </li>
                </ul>
              </div>
              {/* row2 col # 2 */}
              <div className="col-md-6">
                <ul className="list-unstyled fw-bold">
                  <li
                    className="rounded my-3 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Instant Malware Removal
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Free Delivary Services
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Website Hack Repair
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Website Security Services
                  </li>
                  <li
                    className="rounded mt-4 li-1"
                    style={{ backgroundColor: '#fef4f8' }}
                  >
                    <i className="fas fa-check rounded p-1 m-2"></i>
                    Provide Security services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
