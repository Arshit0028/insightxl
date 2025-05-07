import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg px-6 py-8">
        <h1 className="text-3xl font-extrabold text-violet-700 mb-12">InsightXL</h1>
        <nav className="space-y-6">
          <a href="#" className="flex items-center text-gray-700 hover:text-violet-600 font-medium">
            <span className="material-icons mr-3">dashboard</span> Dashboard
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-violet-600 font-medium">
            <span className="material-icons mr-3">email</span> Email Reports
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-violet-600 font-medium">
            <span className="material-icons mr-3">upload</span> Upload Email
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-violet-600 font-medium">
            <span className="material-icons mr-3">settings</span> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Welcome back!</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-sm text-gray-500">Total Emails</h3>
            <p className="text-3xl font-extrabold text-violet-700">1,240</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-sm text-gray-500">Analyzed</h3>
            <p className="text-3xl font-extrabold text-green-600">1,180</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-sm text-gray-500">Spam Detected</h3>
            <p className="text-3xl font-extrabold text-red-500">45</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-sm text-gray-500">Attachments</h3>
            <p className="text-3xl font-extrabold text-yellow-500">320</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h4 className="text-xl font-semibold mb-6 text-gray-800">Recent Uploads</h4>
          <ul className="divide-y divide-gray-200 text-sm text-gray-600">
            <li className="py-4 flex justify-between items-center">
              <span>john.doe@gmail.com</span>
              <span className="text-green-600 font-medium">Analyzed</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span>report@banking.com</span>
              <span className="text-red-500 font-medium">Spam</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span>info@newsletter.org</span>
              <span className="text-yellow-600 font-medium">Flagged</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
