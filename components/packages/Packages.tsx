'use client';

import Image from 'next/image';

const packages = [
  {
    title: 'SIFT',
    price: '$85.00 - $960.00',
    image: '/images/sift.webp',
  },
  {
    title: 'AFOQT',
    price: '$85.00 - $960.00',
    image: '/images/afqft_b.webp',
  },
  {
    title: 'OAR',
    price: '$85.00 - $960.00',
    image: '/images/oar_g.webp',
  },
  {
    title: 'ASTB',
    price: '$85.00 - $960.00',
    image: '/images/astb_b.webp',
  },
  {
    title: 'ASVAB',
    price: '$75.00 - $700.00',
    image: '/images/asvab-courses-d.jpg',
  },
];

const Packages = () => {
  return (
    <section className="bg-white py-5 text-center">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5 position-relative">
          <h2 className="display-5 fw-bold text-gray-800 d-inline-block pb-3 position-relative">
            Our Packages
            <Image
              src="/images/border_v1.png"
              alt="underline"
              width={160}
              height={8}
              className="position-absolute start-50 translate-middle-x bottom-0"
              style={{ objectFit: 'cover' }}
            />
          </h2>
        </div>

        {/* Description */}
        <p className="text-secondary text-start mx-auto mb-4" style={{ maxWidth: '960px' }}>
          ASVAB Tutoring will provide One-on-One online tutoring service. All the study materials with a lesson plan
          will be provided. Each session is 2 hours. The tutoring services offered by ASVAB Tutoring are as follows.
        </p>

        {/* Subheading */}
        <h3 className="fw-semibold fs-5 mb-4 text-start" style={{ maxWidth: '960px', marginInline: 'auto' }}>
          Select online Tutoring package:
        </h3>

        {/* Packages Grid */}
        <div className="row justify-content-center g-4 mb-5">
          {packages.map((pkg, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 hover-lift">
              <div className="card h-100 shadow-sm">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={500}
                  height={300}
                  className="card-img-top"
                  style={{ height: 'auto', objectFit: 'cover' }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold text-primary">{pkg.title}</h5>
                  <p className="card-text text-secondary fw-semibold">{pkg.price}</p>
                  <div className="text-center">
                    <a href="#" className="btn btn-secondary-custom btn-sm w-50">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <p className="text-muted fs-6 text-start mx-auto mb-3" style={{ maxWidth: '960px' }}>
          <span className="fw-semibold text-danger">NOTE:</span> No session will be scheduled without payment
          information on file. Students are required to submit homework before each session.
        </p>
        <p className="text-muted fs-6 text-start mx-auto mb-5" style={{ maxWidth: '960px' }}>
          <span className="fw-semibold text-primary">Cancellation Policy:</span> If you want to cancel a session or
          reschedule, 24 hrs. advance notice is required. You can cancel the entire service within 7 days.
        </p>

        {/* Enroll Button */}
        <a href="/tutors" className="btn btn-primary-custom fw-semibold text-white px-4 py-2 mb-4">
          ENROLL NOW
        </a>
      </div>

      {/* Call to Action Section */}
      <div className="mt-5 position-relative text-white overflow-hidden">
        <div
          className="py-5 d-flex flex-column flex-md-row justify-content-between align-items-center rounded bg-cover-overlay w-100"
          style={{
            backgroundImage: 'url(/images/productimage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

          {/* Content */}
          <div className="container position-relative z-1 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h3 className="fs-4 fs-md-3 fw-bold text-center text-md-start mb-3 mb-md-0">
              Great News! Take your Free ASVAB and AFQT exam now!
            </h3>
            <a
              href="get_started.html"
              className="btn btn-primary-custom text-white fw-semibold d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-hand-index-thumb-fill"></i> Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
