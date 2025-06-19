'use client';
import Image from "next/image";
import { useEffect } from 'react';

export default function Faq() {
  useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    // Ensure Bootstrap JS is loaded (for accordion toggle)
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-5 px-3">
      <div className="container">
        <div className="text-center mb-4 position-relative">
          <h2 className="fw-bold display-6 d-inline-block pb-3 position-relative text-dark" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Frequently Asked Questions
            <Image
              src="/images/border_v1.png"
              alt="underline"
               width={160}
                height={8}
              className="position-absolute start-50 translate-middle-x bottom-0"
              style={{ height: '8px', width: '160px', objectFit: 'cover' }}
            />
          </h2>
        </div>

        <div className="accordion" id="faqAccordion">
          {[
            {
              question: 'Why is a high score important for the ASVAB test?',
              answer: 'The score you get on the ASVAB will determine how qualified you are for certain military occupational specialties and Enlistment Bonuses...',
              id: 'One',
              show: true,
            },
            {
              question: 'How long does it take to get ready?',
              answer: 'We offer specialized plans for each student. Our expert tutors will provide a free consultation...',
              id: 'Two',
            },
            {
              question: 'How can I pay?',
              answer: 'We do not collect and debit or credit card information. All payment will be made through Paypal...',
              id: 'Three',
            },
            {
              question: 'When can I claim refund?',
              answer: 'If you fail after total twelve sessions, we will provide tutoring service until you pass the test for free.',
              id: 'Four',
            },
            {
              question: 'How to cancel a schedule?',
              answer: 'If you want to cancel a lesson or reschedule, 24 hrs. advance notice is required...',
              id: 'Five',
            },
          ].map(({ question, answer, id, show }) => (
            <div className="accordion-item border shadow-sm" key={id}>
              <h2 className="accordion-header" id={`heading${id}`}>
                <button
                  className={`accordion-button custom-bg ${!show ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded={show ? 'true' : 'false'}
                  aria-controls={`collapse${id}`}
                >
                  {question}
                  <i className="bi bi-chevron-up icon-up accordion-icon ms-auto" />
                  <i className="bi bi-chevron-down icon-down accordion-icon ms-auto" />
                </button>
              </h2>
              <div
                id={`collapse${id}`}
                className={`accordion-collapse collapse ${show ? 'show' : ''}`}
                aria-labelledby={`heading${id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small text-muted">{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
