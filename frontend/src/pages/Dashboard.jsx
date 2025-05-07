import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Positive', value: 720, color: '#10B981' },
  { name: 'Neutral', value: 300, color: '#F59E0B' },
  { name: 'Negative', value: 160, color: '#EF4444' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-2xl font-extrabold text-violet-700 tracking-tight">InsightXL</h1>
        <div className="space-x-6 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-violet-600">Dashboard</a>
          <a href="#" className="hover:text-violet-600">Email Reports</a>
          <a href="#" className="hover:text-violet-600">Upload Email</a>
          <a href="#" className="hover:text-violet-600">Settings</a>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg px-6 py-8 border-r border-gray-200 hidden lg:block">
          <nav className="space-y-6 text-lg">
            <a href="#" className="block hover:text-violet-600 font-medium">Dashboard</a>
            <a href="#" className="block hover:text-violet-600 font-medium">Email Reports</a>
            <a href="#" className="block hover:text-violet-600 font-medium">Upload Email</a>
            <a href="#" className="block hover:text-violet-600 font-medium">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h2 className="text-4xl font-bold mb-10">Welcome back!</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Emails', value: '1,240', color: 'text-violet-700' },
              { label: 'Analyzed', value: '1,180', color: 'text-green-600' },
              { label: 'Spam Detected', value: '45', color: 'text-red-500' },
              { label: 'Attachments', value: '320', color: 'text-yellow-500' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-sm text-gray-500">{card.label}</h3>
                <p className={`text-3xl font-extrabold ${card.color}`}>{card.value}</p>
              </div>
            ))}
          </div>

          {/* Chart & Recent Uploads */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Email Sentiment Analysis</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Uploads */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Recent Uploads</h4>
              <ul className="divide-y divide-gray-200 text-sm">
                <li className="py-3 flex justify-between items-center">
                  <span>john.doe@gmail.com</span>
                  <span className="text-green-600 font-medium">Analyzed</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <span>report@banking.com</span>
                  <span className="text-red-500 font-medium">Spam</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <span>info@newsletter.org</span>
                  <span className="text-yellow-500 font-medium">Flagged</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
