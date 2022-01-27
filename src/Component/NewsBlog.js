import React from 'react';
import NewsCard from './NewsCard';

export default function NewsBlog() {
  return (
    <>
      <div className="container-fluid">
        {/* Heading */}
        <div className="container text-center ">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-8">
              <h2 className="fw-bold pt-5 pb-2">Latest News From Blog</h2>
              <p className="pb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quam neque quibusdam corrupti aspernatur corporis
                alias nisi dolorum expedita veritatis voluptates minima
                sapiente.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around pb-5">
          {/* Cards */}
          <NewsCard
            heading="Secure Managed IT"
            image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/blog_05-1-1-1-1-570x600.jpg"
          />
          <NewsCard
            heading="Cloud Security "
            image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/blog_01-1-1-1-1-570x600.jpg"
          />
          <NewsCard
            heading="Secure Managed Web "
            image="https://themes.envytheme.com/vaximo/wp-content/uploads/2020/07/blog_04-1-1-1-1-570x600.jpg"
          />
        </div>
      </div>
    </>
  );
}
