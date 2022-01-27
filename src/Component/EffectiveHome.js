import React from 'react';
import EffectiveHomeCard from './EffectiveHomeCard';

export default function EffectiveHome() {
  return (
    <>
      <div className='container-fluid py-5'>
        <div className='row justify-content-around text-center'>
          <div className='col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6'>
            <h2 className='fw-bolder pb-3'>
              Complete And Effective Protection For Your Home And Office
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor elit incididunt ut labore et dolore magna aliqua.
              Quis ipsum
            </p>
          </div>
        </div>
        <div className='row justify-content-around pt-4'>
          <EffectiveHomeCard
            image='fal fa-credit-card-front fa-2x rounded-circle p-3 my-4'
            heading='Check And Search Hazards'
          />
          <EffectiveHomeCard
            image='far fa-user-shield fa-2x rounded-circle py-3 px-2 ps-3 my-4'
            heading='Install and Configure Software'
          />
          <EffectiveHomeCard
            image='fal fa-user-hard-hat fa-2x rounded-circle p-3 my-4'
            heading='Departure of the Our Experts'
          />
          <EffectiveHomeCard
            image='far fa-cogs fa-2x rounded-circle p-3 my-4'
            heading='24/7 Support and Remote Admit'
          />
        </div>
      </div>
    </>
  );
}
