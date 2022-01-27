import React from 'react';
import ClientCard from './ClientCard';

export default function Client() {
  return (
    <>
      <div
        className="container-fluid  bg-image"
        style={{
          backgroundImage:
            "url('https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/client-bg-1-1-1-1.jpg')",
          backgroundSize: 'cover',
          opacity: '0.9',
        }}
      >
        <div className="container">
          <div className="row justify-content-around text-center py-5">
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-7"
              style={{ color: 'white' }}
            >
              <h2 className="fw-bolder pb-3">What Client’s Say About Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quam neque quibusdam corrupti aspernatur corporis
                alias nisi dolorum expedita veritatis voluptates minima.
              </p>
            </div>
          </div>

          <div className="row pb-5 justify-content-center">
            <ClientCard
              image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/client2-1-1-1-1.jpg"
              name="Axon Detos"
              rank="CEO"
            />
            <ClientCard
              image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/client1-1-1-1-1.jpg"
              name="Kilva Dew"
              rank="Developer"
            />
            <ClientCard
              image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/client5-1-1-1-1.jpg"
              name="Alien Dew"
              rank="Manager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
