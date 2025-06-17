'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Review = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <section className="testimonial-section text-center py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="display-5 fw-bold text-gray-800 d-inline-block pb-3 position-relative">
          Students Reviews
          <Image
            src="/images/border_v1.png"
            alt="underline"
            width={160}
            height={8}
            className="position-absolute bottom-0 start-50 translate-middle-x"
            style={{ objectFit: 'cover' }}
          />
        </h2>

        <div
          id="testimonialCarousel"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="p-4 px-md-5">
                <div className="quote-icon quote-close">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">
                  I bought several from amazon to study the ASTB exam...
                </p>
                <div className="d-flex justify-content-center align-items-center testimonial-author gap-3 mt-4">
                  <Image
                    src="/images/default_profile.png"
                    alt="Hunder007"
                    width={40}
                    height={40}
                    className="rounded-circle"
                  />
                  <span className="fw-semibold">Hunder007</span>
                </div>
              </div>
            </div>

            {/* Additional carousel items here... */}
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
