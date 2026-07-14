function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Section */}
      <div className="hidden lg:flex flex-1 bg-blue-600 text-white p-16 flex-col justify-center">

        <h1 className="text-5xl font-extrabold">
          Career Copilot AI
        </h1>

        <p className="mt-8 text-xl leading-9 max-w-lg">
          Your AI-powered companion to build resumes,
          crack interviews, and land your dream job.
        </p>

      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center p-8">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center">
            {title}
          </h2>

          <p className="text-center text-gray-500 mt-3">
            {subtitle}
          </p>

          <div className="mt-10">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;