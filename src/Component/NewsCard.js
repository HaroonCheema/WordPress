import React from 'react';

export default function NewsCard(props) {
  const { heading, image } = props;
  return (
    <>
      <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 mt-1 mt-md-4 ms-5 my-3 ms-sm-5 my-sm-3 ms-md-0">
        <div className="card bg-dark text-white imgHov">
          <img src={image} className="card-img" alt="empty" />
          <div className="card-img-overlay">
            <h6 className="card-title fw-bold" style={{ marginTop: '145px' }}>
              {heading}
            </h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
              ut labore
            </p>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: '#d60650' }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
