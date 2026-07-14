import { useState } from "react";
import ResumeScore from "./ResumeScore";
import Suggestions from "./Suggestions";

function ResumeUpload() {
  const [fileName, setFileName] = useState("");

  function handleFile(e) {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analyzer
        </h1>

        <div className="bg-white rounded-2xl shadow p-8">

          <label className="border-2 border-dashed border-blue-400 rounded-xl p-12 flex flex-col items-center cursor-pointer">

            <h2 className="text-xl font-semibold">
              Drag & Drop Resume
            </h2>

            <p className="text-gray-500 mt-2">
              PDF Only
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFile}
            />

          </label>

          {fileName && (

            <div className="mt-6 bg-slate-100 rounded-xl p-4">

              <strong>Selected File:</strong>

              <p>{fileName}</p>

            </div>

          )}

          <button
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Analyze Resume
          </button>

        </div>

        {fileName && (

          <>
            <ResumeScore />

            <Suggestions />
          </>

        )}

      </div>

    </div>
  );
}

export default ResumeUpload;