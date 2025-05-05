export default function StudentListPage() {
    return (
      <div>
        <h2>Student List [17418]</h2>
        <div className="d-flex justify-content-between align-items-center my-3">
          <input type="text" className="form-control me-2" placeholder="Search by Name or Email" style={{ maxWidth: '300px' }} />
          <button className="btn btn-primary">Search</button>
        </div>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th><input type="checkbox" /></th>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Reg at</th>
              <th>Paid</th>
              <th>Reg. Date</th>
              <th>Exp. Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample static rows */}
            <tr>
              <td><input type="checkbox" /></td>
              <td>147761</td>
              <td>Annette Gaskins<br/><small>nettie...@gmail.com<br/>Mobile: 813...</small></td>
              <td>ASVAB</td>
              <td>Web</td>
              <td className="text-success">Yes</td>
              <td>27-Apr-2025</td>
              <td>27-Aug-2025</td>
              <td>Edit | View | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  