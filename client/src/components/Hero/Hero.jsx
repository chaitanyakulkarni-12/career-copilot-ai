import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Career Guidance Powered by AI
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-6 leading-tight">
            We are waiting for you to see the
            <span className="text-blue-600"> bright future.</span>
          </h1>

          <p className="text-slate-600 text-lg mt-8 leading-8">
            Career Copilot AI helps students improve resumes,
            practice interviews with AI, and track job applications—
            all in one platform designed to boost confidence before
            every interview.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="flex items-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700 transition">
              <FaPlayCircle />
              Watch Demo
            </button>

            <button className="flex items-center gap-2 border border-slate-300 px-7 py-4 rounded-xl hover:bg-slate-100 transition">
              Start Free
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* Right Side Dashboard Preview */}

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">
              Career Dashboard
            </h3>

            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Active
            </span>
          </div>

          <div className="space-y-5">

            <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
              <span>Resume Score</span>
              <strong>91%</strong>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
              <span>Interview Readiness</span>
              <strong>82%</strong>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
              <span>Applications</span>
              <strong>24</strong>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
              <span>Next Interview</span>
              <strong>Tomorrow</strong>
            </div>

          </div>

          <div className="mt-8">

            <p className="font-semibold mb-3">
              Weekly Progress
            </p>

            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>
            </div>

            <p className="text-sm text-slate-500 mt-2">
              80% Goal Completed
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;  