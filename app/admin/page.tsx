export default function AdminDashboard() {
    return (
      <div>
        <h5>Dashboard</h5>
        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="card bg-teal text-white p-3">
              <h6>Total AR Questions</h6>
              <h2>246</h2>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-teal text-white p-3">
              <h6>Total MK Questions</h6>
              <h2>137</h2>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    );
  }
  