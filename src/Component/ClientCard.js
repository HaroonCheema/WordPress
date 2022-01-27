import React from 'react';

export default function ClientCard(props) {
  const { image, name, rank } = props;
  return (
    <>
      <div className='col-12 col-sm-12 col-md-7 col-lg-4 col-xl-4 mt-md-5 mt-lg-0'>
        <center>
          <i
            className='fas fa-quote-left fa-1x p-4 rounded-circle shadow'
            style={{ color: '#d80650', backgroundColor: '#fff' }}
          ></i>
          <div
            className='shadow-sm rounded'
            style={{ marginTop: '-35px', backgroundColor: '#fff' }}
          >
            <p className='pt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
            <div className='pb-4' style={{ color: '#d80650' }}>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
            </div>
          </div>
        </center>
        <div className='corner-1'></div>
        <div className='text-center' style={{ width: '190px' }}>
          <img
            src={image}
            alt='empty'
            className='img-fluid rounded mt-1 mb-3'
          />
          <h5 className='fw-bold text-light'>{name}</h5>
          <p
            className='fw-bold'
            style={{
              color: '#c4074b',
              marginTop: '-10px',
            }}
          >
            {rank}
          </p>
        </div>
      </div>
    </>
  );
}
