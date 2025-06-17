'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Teachers() {
  const teachers = [
    {
      name: 'Deb Das',
      title: 'FOUNDER',
      img: '/images/deb_das_profile.webp',
      bio: `Deb Das is the president and the founder of ASVAB Tutoring. He has over a decade of experience in tutoring students. He has worked to find the right formula to make learning easy for everyone. Deb is an Aerospace Engineer. He has a Bachelor’s of Science Engineering in Mechanical Engineering and a Master’s of Science Engineering in Nuclear Engineering from the City University of New York (CCNY). He has completed Entrepreneur Essentials, Leading with Motivating and Decision-Making courses from Harvard Business School Online. Deb was selected NAVAIR’s Journey Leadership Development Program (JLDP), a command-wide program designed to develop its members into future leaders.`,
    },
    {
      name: 'Jayanta Das',
      title: 'CO-FOUNDER',
      img: '/images/jayanta_das_profile.webp',
      bio: `Jayanta Mondal is one of the co-founders of ASVAB Tutoring. He has a BSc. in Biomedical Engineering from Yale University. He’s passionate about helping underrepresented populations in science, technology, engineering, and math (STEM) fields via tutoring and college mentorship. He has over 6 years of experience in tutoring high school courses and various standardized exams including ASVAB, SAT, ACT and SAT subject tests. During his time at Yale, he served as the Head Ambassador at Yale Quest Bridge Chapter to promote representation of first-generation, low income students on the campus. He plans to pursue a law degree in the future.`,
    },
    {
      name: 'Partha Dey',
      title: 'ELECTRICAL ENGINEERING',
      img: '/images/partha_dey_profile.webp',
      bio: `Partha has a bachelor degree in Electrical Engineering from City University of New York (City College). He has been tutoring K-12 students for the past five years with a high success rate. He helps students to overcome learning obstacles on their way to acquiring specific skills. His focus is on understanding each student’s own learning goals and how he or she likes to work. He is very flexible and friendly with students.`,
    },
    {
      name: 'Kishaloy Mallick',
      title: 'ELECTRICAL ENGINEER, STONY BROOK UNIVERSITY',
      img: '/images/kishaloy_profile.webp',
      bio: `Kishaloy is a recent graduate from Stony Brook University, New York with a degree in Electrical Engineering. He has been tutoring in NYC area past 7 years. He is a friendly and supportive person who gets excellent results by making lessons fun as well as informative. He is one of the brilliant students of the president of ASVAB Tutoring. In his free time Kishaloy likes to play soccer.`,
    },
  ];

  return (
    <section className="bg-white text-dark py-5 px-3">
      <div className="text-center mb-5 position-relative">
        <h2 className="fw-bold display-5 d-inline-block pb-3 position-relative">
          Meet Our Teachers
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
          {teachers.map((teacher, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 shadow-sm text-center">
                <div className="pt-4">
                  <Image
                    src={teacher.img}
                    alt={teacher.name}
                    width={160}
                    height={160}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body d-flex flex-column text-start px-4">
                  <h5 className="card-title text-center fw-semibold mt-3">{teacher.name}</h5>
                  <p className="text-center text-primary small mb-3 fw-medium">{teacher.title}</p>
                  <p className="card-text small text-muted">{teacher.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link href="/tutors" className="btn btn-primary-custom text-white fw-semibold px-4 py-2">
            See All Tutors
          </Link>
        </div>
      </div>
    </section>
  );
}
