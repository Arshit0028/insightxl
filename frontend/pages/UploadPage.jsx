import { useState } from 'react';

function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={handleUpload} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Upload Excel File</h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadPage;
