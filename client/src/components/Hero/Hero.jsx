import {
  FaArrowRight,
  FaPlayCircle,
  FaCheckCircle,
  FaFileAlt,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            🚀 AI Career Assistant

          </span>

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight mt-8">

            We are waiting for you to see the

            <span className="text-blue-600">

              {" "}bright future.

            </span>

          </h1>

          <p className="text-slate-600 text-xl leading-9 mt-8">

            Career Copilot AI helps students improve resumes,
            crack interviews, build confidence and manage every
            job application with Artificial Intelligence.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg transition">

              Start Free

              <FaArrowRight />

            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white transition">

              <FaPlayCircle />

              Watch Demo

            </button>

          </div>

          {/* Trust */}

          <div className="flex items-center gap-5 mt-12">

            <div className="flex text-yellow-400 text-xl">

              ⭐⭐⭐⭐⭐

            </div>

            <p className="text-slate-600">

              Trusted by

              <span className="font-bold">

                {" "}10,000+

              </span>

              students

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-bold">

                  AI Dashboard

                </h3>

                <p className="text-slate-500">

                  Welcome back 👋

                </p>

              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                Active

              </span>

            </div>

            <div className="space-y-6 mt-8">

              <div>

                <div className="flex justify-between">

                  <span>Resume Score</span>

                  <strong>92%</strong>

                </div>

                <div className="bg-slate-200 rounded-full h-3 mt-2">

                  <div className="bg-blue-600 h-3 rounded-full w-[92%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span>Interview Ready</span>

                  <strong>85%</strong>

                </div>

                <div className="bg-slate-200 rounded-full h-3 mt-2">

                  <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-blue-50 rounded-xl p-5">

                  <FaFileAlt className="text-blue-600 text-2xl"/>

                  <p className="mt-3 font-semibold">

                    ATS Optimized

                  </p>

                </div>

                <div className="bg-green-50 rounded-xl p-5">

                  <FaBriefcase className="text-green-600 text-2xl"/>

                  <p className="mt-3 font-semibold">

                    24 Applications

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-2xl px-6 py-5">

            <div className="flex items-center gap-3">

              <FaChartLine className="text-blue-600 text-3xl"/>

              <div>

                <p className="font-bold">

                  Weekly Progress

                </p>

                <p className="text-green-600">

                  +18%

                </p>

              </div>

            </div>

          </div>

          <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-4">

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-green-600"/>

              Resume Improved

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;