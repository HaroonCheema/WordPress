import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      {/* Top Menu */}
      <div className='container-fluid' style={{ backgroundColor: '#0a061c' }}>
        <div className='row justify-content-between text-light'>
          <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 py-2'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-7 col-lg-5 col-xl-4 ps-md-5 ps-lg-5 ps-xl-5'>
                <h6 className='header1'>
                  <i className='fal fa-envelope pe-3'></i>Email: hi@pits.pk
                </h6>
              </div>
              <div className='col-12 col-sm-12 col-md-7 col-lg-5 col-xl-3  ps-md-5 ps-xl-0'>
                <h6 className='header1'>
                  <i className='fal fa-phone-volume pe-3'></i>+92304-1112139
                </h6>
              </div>
              <div className='col-12 col-sm-12 col-md-7 col-lg-8 col-xl-5  ps-md-5 ps-xl-0'>
                <h6>
                  <i className='far fa-map-marker-plus pe-3'></i>Ravi Block
                  Cantt Gujranwala, Pakistan
                </h6>
              </div>
            </div>
            {/* Pakistan IT Solutions (Private) Limited. FF5 Commercial Centre Near Bank of Punjab Ravi Block DC Colony Rahwali Cantt Gujranwala, 52230 Punjab, Pakistan */}
          </div>
          <div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 py-md-4 pt-lg-4 py-xl-2'>
            <i className='fab fa-twitter px-3 header1'></i>
            <i className='fab fa-facebook-f px-3 header1'></i>
            <i className='fab fa-instagram px-3 header1'></i>
            <i className='fab fa-linkedin-in px-3 header1'></i>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}
