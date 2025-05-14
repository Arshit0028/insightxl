// UploadPage.jsx

import { useState } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("excel", file); // This must match `multer.single('excel')` in backend

    setStatus("uploading");

    try {
      const response = await fetch("http://localhost:5000/api/excel-upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        console.log("✅ Upload success:", result);
      } else {
        setStatus("error");
        alert(result.message || "Upload failed");
      }
    } catch (error) {
      console.error("❌ Upload failed:", error);
      setStatus("error");
      alert("An error occurred during upload.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <form
        onSubmit={handleUpload}
        className="bg-white p-10 rounded-2xl shadow-lg border w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Upload Excel File
        </h2>

        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 transition"
        >
          <UploadCloud className="w-8 h-8 text-gray-500 mb-2" />
          <p className="text-sm text-gray-600">
            {file ? file.name : "Click to select an Excel file"}
          </p>
        </label>

        <input
          id="file"
          type="file"
          accept=".xlsx, .xls"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          disabled={status === "uploading"}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {status === "uploading" ? "Uploading..." : "Upload"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-4 flex items-center justify-center gap-1 text-sm">
            <CheckCircle2 className="w-4 h-4" /> File uploaded successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 flex items-center justify-center gap-1 text-sm">
            <AlertCircle className="w-4 h-4" /> Upload failed. Try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default UploadPage;
