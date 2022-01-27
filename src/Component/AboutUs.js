import React from 'react';
// import Particles from 'react-tsparticles';

export default function AboutUs() {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <>
      <div
        className="container-fluid bg-image"
        style={{
          backgroundColor: '#090218'
          // backgroundImage:
          //   "url('https://media.istockphoto.com/photos/dark-floor-background-black-empty-space-for-display-your-products-picture-id1213790203?k=20&m=1213790203&s=170667a&w=0&h=PPxaKWG75XDh1NXCZbsGRFoQlWlr5Kq5YOFBYh1aiIs=')",
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // opacity: '0.9',
        }}
      >
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 9,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        /> */}
        <div className="row justify-content-around">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-light">
            <h5 className="pt-5 pt-xl-5">
              All Research up to Blockchain Interoperability is completed
            </h5>
            <h1 className="fw-bold display-3 pt-3 pb-4 pt-xl-5">
              A Team Of Professionals To Protect Your Team
            </h1>
            <h5 className="pb-5 py-xl-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae debitis repellat consequuntur, doloremque, magnam vel
              quis porro ducimus eum alias quas?
            </h5>
            <button
              className="btn btn-1 rounded-0 fw-bold me-5 py-2 px-4 my-2 mb-lg-3"
              type="submit"
            >
              Get Started
            </button>
            <button
              className="btn btn-2 rounded-0 fw-bold me-5 py-2 px-4 my-2 mb-lg-3"
              type="submit"
            >
              About Us
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 my-lg-5 mt-xl-2">
            <img
              src="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/08/banner-site-img-1-1.png"
              alt="empty"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
