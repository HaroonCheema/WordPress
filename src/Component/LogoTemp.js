import React from 'react';

export default function LogoTemp(props) {
  const { image1, image2 } = props;
  return (
    <>
      <div className="col-md-4 my-3 my-sm-3 my-md-0 my-lg-0 my-xl-0 loGo">
        <img src={image1} alt="empty" className="img-fluid image" />
        <div className="overlay overlayBottom">
          <img src={image2} alt="empty" className="img-fluid image-1" />
        </div>
      </div>
    </>
  );
}
