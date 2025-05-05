import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="card mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome to InsightXL</h1>
          <p className="text-gray-600">Your smart AI-powered spreadsheet assistant.</p>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Upload Excel File</h2>
            <input type="file" accept=".xlsx, .xls" className="input mb-4" />
            <button className="btn btn-primary w-full">Upload</button>
          </div>

          {/* Insights Section */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Recent Insights</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Sales Report - March.xlsx</li>
              <li>Leads Breakdown - Q1</li>
              <li>Customer Feedback Summary</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-300 mt-10">
          &copy; {new Date().getFullYear()} InsightXL. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
