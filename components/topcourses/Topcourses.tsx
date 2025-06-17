'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TopCourses() {
  return (
    <section className="bg-dark-blue text-white py-5 px-3">
      <div className="text-center mb-5 position-relative">
        <h2 className="fw-bold display-5 d-inline-block pb-3 position-relative">
          Top Courses
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

      <div className="container">
        <div className="row g-4">
          {[
            {
              title: 'ASVAB',
              img: '/images/asvab-courses-d.jpg',
              desc: 'The Armed Services Vocational Aptitude Battery Test (ASVAB) is a multiple choice test...',
            },
            {
              title: 'ASTB',
              img: '/images/astb_b.webp',
              desc: 'The Aviation Selection Test Battery (ASTB) is a subtest that covers seven key areas...',
            },
            {
              title: 'SIFT',
              img: '/images/sift.webp',
              desc: 'ASVAB Tutoring helps you to fulfill your dreams by ensuring that you cover all the areas...',
            },
            {
              title: 'AFOQT',
              img: '/images/afqft_b.webp',
              desc: 'The Air Force Officer Qualifying Test (AFOQT) is a standardized test used to select...',
            },
          ].map((course, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm hover-lift">
                <Image
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                  width={400}
                  height={200}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <p className="card-text small text-muted">{course.desc}</p>
                  <div className="text-center mt-auto">
                    <Link href="#" className="btn btn-secondary-custom btn-sm w-50">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
