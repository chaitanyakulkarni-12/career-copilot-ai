import { useState } from "react";
import ResumeScore from "./ResumeScore";
import Suggestions from "./Suggestions";
import DetectedSkills from "./DetectedSkills";

function ResumeUpload() {

  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [result, setResult] = useState(null);

  function handleFile(e) {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);

      // Reset previous analysis
      setLoading(false);
      setAnalyzed(false);
    }
  }

 async function handleAnalyze() {

  if (!fileName) {
    alert("Please upload a resume first.");
    return;
  }

  setLoading(true);
  setAnalyzed(false);

  const fileInput = document.getElementById("resume");

  const formData = new FormData();

  formData.append("resume", fileInput.files[0]);

  try {

    const response = await fetch(
      "http://localhost:5000/api/resume/upload",
      {
        method: "POST",
        body: formData,
      }
      
    );
setResult(response.data);
    const data = await response.json();

  console.log("Extracted Resume Text:");
console.log(response.data);

    setLoading(false);

    setAnalyzed(true);

  } catch (error) {

    console.error(error);

    setLoading(false);

    alert("Server Error");

  }

}

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analyzer
        </h1>

        {/* Upload Card */}

        <div className="bg-white rounded-2xl shadow p-8">

          <label
            htmlFor="resume"
            className="border-2 border-dashed border-blue-400 rounded-2xl
            p-14 flex flex-col items-center justify-center
            cursor-pointer hover:bg-blue-50 transition"
          >

            <div className="text-6xl">
              📄
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Upload Resume
            </h2>

            <p className="text-gray-500 mt-2">
              Drag & Drop PDF Resume Here
            </p>

            <p className="text-gray-400 mt-2">
              or click to browse
            </p>

          </label>

          <input
            id="resume"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFile}
          />

          {fileName && (

            <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-bold">
                  Resume Uploaded
                </h3>

                <p className="text-gray-600">
                  {fileName}
                </p>

              </div>

              <span className="text-green-600 font-bold">
                ✓ Ready
              </span>

            </div>

          )}

          <button
            onClick={handleAnalyze}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Analyze Resume →
          </button>

        </div>

        {/* Loading Animation */}

        {loading && (

          <div className="bg-white rounded-2xl shadow p-10 mt-8 text-center">

            <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <h2 className="text-2xl font-bold mt-6">
              🤖 AI is analyzing your resume...
            </h2>

            <p className="text-gray-500 mt-3">
              Checking ATS compatibility, keywords and resume quality...
            </p>

          </div>

        )}

        {/* Analysis Result */}

        {analyzed && (
          <>
           {result && (
    <ResumeScore score={result.score} />
    
)}
{result && (
    <DetectedSkills skills={result.skills} />
)}  
          {result && (
    <Suggestions suggestions={result.suggestions} />
)}
          </>
        )}

      </div>

    </div>
  );
}

export default ResumeUpload;