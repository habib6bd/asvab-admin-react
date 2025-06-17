'use client';

import React from 'react';

const ServicePage = () => {
  return (
    <section>
      {/* Banner */}
      <div className="banner text-center py-5 bg-light">
        <h1 className="display-4">Services</h1>
      </div>

      <div className="container py-5 text-dark">
        <h1 className="fs-4">AFOQT [Air Force Officer Qualifying Test]</h1>
        <p className="mb-4">
          It is a standardized test on verbal (English) and Math and additional aptitude based on the career field you
          have. Some of the subtests are as follows:
        </p>

        {/* Subtests Table */}
        <div className="table-responsive mb-5">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>SUB TESTS</th>
                <th>NO. OF QUESTIONS</th>
                <th>TIME (MINS)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Verbal Analogies', 25, 8],
                ['Arithmetic Reasoning', 25, 29],
                ['Word Knowledge', 25, 5],
                ['Math Knowledge', 25, 22],
                ['Instrument Comprehension', 20, 6],
                ['Block Counting', 20, 3],
                ['Table Reading', 40, 7],
                ['Aviation Information', 20, 8],
                ['General Science', 20, 10],
                ['Rotated Blocks', 15, 13],
                ['Hidden Figures', 15, 8],
                ['Self-Description Inventory', 220, 40],
              ].map(([subtest, questions, time], index) => (
                <tr key={index}>
                  <td>{subtest}</td>
                  <td>{questions}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Minimum Scores Table */}
        <h3 className="mb-3">Minimum scores table:</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>CAREER TYPE</th>
                <th>VERBAL</th>
                <th>QUANTITATIVE</th>
                <th>PILOT</th>
                <th>NAVIGATOR</th>
                <th>COMBINED PILOT/NAV</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pilot', 15, 10, 25, 10, 50],
                ['Navigator', 15, 10, 10, 25, 50],
                ['All Others', 15, 10, 'N/A', 'N/A', 'N/A'],
              ].map(([career, verbal, quant, pilot, nav, combined], index) => (
                <tr key={index}>
                  <td>{career}</td>
                  <td>{verbal}</td>
                  <td>{quant}</td>
                  <td>{pilot}</td>
                  <td>{nav}</td>
                  <td>{combined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
