"use client";

import Image from "next/image";

export default function Welcome() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-vh-100 d-flex align-items-center bg-hero text-white py-5 px-3">
        <div className="container hero-content">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 text-center">
              <h1 className="display-5 fw-bold">
                Welcome To <br />
                <span className="primary-color-custom">ASVAB Tutoring</span>
              </h1>
              <p className="lead mt-3">
                10,000+ successful candidates. Online Test Prep for the ASVAB,
                ASTB, OAR, AFOQT, and SIFT.
              </p>
              <button className="btn btn-primary-custom mt-3">ENROLL NOW</button>

              <div className="mt-4 bg-white p-3 rounded shadow">
                <video
                  controls
                  poster="/images/asvab-video-poster.jpg"
                  className="w-100 rounded"
                  style={{ objectFit: "cover" }}
                >
                  <source src="/videos/ASVAB-Promo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-6">
              <div className="bg-custom-dark p-4 rounded shadow text-white">
                <h2 className="text-center mb-4">REQUEST A TUTOR NOW!</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email (Use your valid email address)</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone (US Only)</label>
                    <input type="tel" className="form-control" placeholder="Phone" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <select className="form-select">
                      <option value="">—Please choose an option—</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={4}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary-custom w-50 d-block mx-auto mt-4">
                    Submit
                  </button>
                </form>

                {/* App Download Icons */}
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    height="40"
                  />
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    height="40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-5 bg-white px-3">
        <div className="container">
          <div className="text-center position-relative">
            <h2 className="fw-bold display-5 text-dark position-relative d-inline-block pb-3">
              Welcome
              <Image
                src="/images/border_v1.png"
                alt="underline"
                width={160}
                height={8}
                className="position-absolute start-50 translate-middle-x bottom-0"
                style={{ objectFit: "cover" }}
              />
            </h2>
          </div>
          <p className="mt-4 text-muted fs-5">
            Need help with the ASVAB? We are here for you. No longer do you need
            to prove yourself as a good student by memorizing whole subjects.
            Now you only need to learn the techniques to excel in your field.
            ASVAB tutoring provides you with the one-stop solution to help
            establish your career in the Armed Forces. ASVAB Tutoring was
            established in 2012 by a group of adroit engineers to simplify and
            streamline the learning process.
          </p>
          <div className="text-center">
            <button className="btn btn-primary-custom mt-4 px-5 py-2">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
