import React from 'react';

export default function EffectiveHomeCard(props) {
  const { image, heading } = props;
  return (
    <>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-5 border-0'>
        <div className='card h-100 border-0 homeCard'>
          <div className='card-body'>
            <i className={`${image} filp-image`}></i>
            <h3 className='card-title'>{heading}</h3>
            <p className='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className='corner'></div>
        </div>
      </div>
    </>
  );
}
