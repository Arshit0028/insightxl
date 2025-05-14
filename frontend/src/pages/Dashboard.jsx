import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Plot from 'react-plotly.js';

const pieData = [
  { name: 'Positive', value: 100, color: '#10B981' },
  { name: 'Neutral', value: 300, color: '#F59E0B' },
  { name: 'Negative', value: 160, color: '#EF4444' },
];

const sentimentData = [
  { name: 'Positive', value: 720 },
  { name: 'Neutral', value: 300 },
  { name: 'Negative', value: 160 },
];

const emailData = [
  { x: 10, y: 20, z: 30, sentiment: 'Positive' },
  { x: 15, y: 25, z: 35, sentiment: 'Neutral' },
  { x: 20, y: 30, z: 40, sentiment: 'Negative' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-2xl font-bold text-indigo-600">InsightXL</h1>
        <nav className="flex space-x-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-500">Dashboard</a>
          <a href="#" className="hover:text-indigo-500">Email Reports</a>
          <a href="#" className="hover:text-indigo-500">Upload Email</a>
          <a href="#" className="hover:text-indigo-500">Settings</a>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white shadow-md px-6 py-8 border-r border-gray-200">
          <nav className="space-y-4 text-base font-medium">
            <a href="#" className="block text-indigo-600">Dashboard</a>
            <a href="/emailreports" className="block hover:text-indigo-500">Email Reports</a>
            <a href="/upload" className="block hover:text-indigo-500">Upload Email</a>
            <a href="/settings" className="block hover:text-indigo-500">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl font-semibold mb-2">Welcome back!</h2>

          <p className="text-gray-600 mb-8 max-w-3xl">
            InsightXL provides a powerful dashboard to analyze your email data in real time.
            Get insights into sentiment trends, spam detection, and file attachment activity.
            Use the charts and stats below to monitor email patterns and review recent uploads.
            Navigate through different sections for detailed reports or upload new emails for analysis.
          </p>


          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Total Emails', value: '1,240', color: 'text-indigo-600' },
              { label: 'Analyzed', value: '1,180', color: 'text-green-500' },
              { label: 'Spam Detected', value: '45', color: 'text-red-500' },
              { label: 'Attachments', value: '320', color: 'text-yellow-500' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-sm text-gray-500">{stat.label}</h3>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Chart & Recent Uploads */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold mb-4">Email Sentiment Analysis</h4>
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

            {/* 2D Bar Chart */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold mb-4">Email Sentiment Distribution</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 3D Scatter Plot */}
            <div className="bg-white rounded-lg p-6 shadow ">
              <h4 className="text-lg font-semibold mb-4">3D Email Data Analysis</h4>
              <div className="h-96">
                <Plot
                  data={[
                    {
                      x: emailData.map((data) => data.x),
                      y: emailData.map((data) => data.y),
                      z: emailData.map((data) => data.z),
                      mode: 'markers',
                      type: 'scatter3d',
                      marker: {
                        size: 8,
                        color: emailData.map((data) => data.sentiment === 'Positive' ? 'green' : data.sentiment === 'Neutral' ? 'yellow' : 'red'),
                      },
                      text: emailData.map((data) => data.sentiment),
                    },
                  ]}
                  layout={{
                    title: '3D Email Data Analysis',
                    autosize: true,
                    scene: {
                      xaxis: { title: 'X Axis' },
                      yaxis: { title: 'Y Axis' },
                      zaxis: { title: 'Z Axis' },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Recent Uploads */}
          <div className="bg-white rounded-lg p-6 shadow mt-10">
            <h4 className="text-lg font-semibold mb-4">Recent Uploads</h4>
            <ul className="divide-y divide-gray-200 text-sm">
              <li className="py-3 flex justify-between items-center">
                <span>john.doe@gmail.com</span>
                <span className="text-green-500 font-medium">Analyzed</span>
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
