function Dashboard() {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome to InsightXL Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">📊 Charts & Stats Section</div>
          <div className="bg-white p-4 rounded shadow">📝 AI Summary</div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  