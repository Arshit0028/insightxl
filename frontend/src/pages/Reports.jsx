import { FaSearch, FaFileExport } from 'react-icons/fa';

const EmailReports = () => {
  const reports = [
    {
      id: 1,
      sender: 'john.doe@gmail.com',
      subject: 'Monthly Invoice',
      date: '2025-05-10',
      sentiment: 'Positive',
      spam: false,
      attachments: true,
    },
    {
      id: 2,
      sender: 'alert@bank.com',
      subject: 'Suspicious Activity',
      date: '2025-05-09',
      sentiment: 'Negative',
      spam: true,
      attachments: false,
    },
    // Add more sample data here
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Email Reports</h2>

      {/* Search & Export Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by sender or subject..."
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          <FaFileExport /> Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-indigo-50 border-b">
            <tr>
              <th className="px-6 py-3">Sender</th>
              <th className="px-6 py-3">Subject</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Sentiment</th>
              <th className="px-6 py-3">Spam</th>
              <th className="px-6 py-3">Attachments</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{report.sender}</td>
                <td className="px-6 py-4">{report.subject}</td>
                <td className="px-6 py-4">{report.date}</td>
                <td className="px-6 py-4 font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      report.sentiment === 'Positive'
                        ? 'bg-green-100 text-green-600'
                        : report.sentiment === 'Neutral'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {report.sentiment}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {report.spam ? (
                    <span className="text-red-500 font-medium">Yes</span>
                  ) : (
                    <span className="text-green-500">No</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {report.attachments ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:underline text-sm">
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailReports;
