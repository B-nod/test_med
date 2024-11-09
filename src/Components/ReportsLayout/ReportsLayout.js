// src/components/ReportsLayout/ReportsLayout.js
import React from 'react';
import './ReportsLayout.css';

const reportsData = [
  { id: 1, doctorName: 'Dr. John Doe', speciality: 'Cardiology', reportFile: '/patient_report.pdf' },
  { id: 2, doctorName: 'Dr. Jane Smith', speciality: 'Dermatology', reportFile: '/patient_report.pdf' },
  // Add more reports if needed
];

const ReportsLayout = () => {
  return (
    <div className="reports-layout-container">
      <h2>Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.doctorName}</td>
              <td>{report.speciality}</td>
              <td>
                <a
                  href={report.reportFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Report
                </a>
              </td>
              <td>
                <a
                  href={report.reportFile}
                  download
                  className="download-button"
                >
                  Download Report
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
