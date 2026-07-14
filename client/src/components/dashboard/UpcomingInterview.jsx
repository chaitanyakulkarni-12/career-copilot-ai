function UpcomingInterview() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Upcoming Interview
      </h2>

      <div className="space-y-4">

        <div>

          <h3 className="font-semibold">
            Google
          </h3>

          <p className="text-gray-500">
            Frontend Internship
          </p>

        </div>

        <div className="text-5xl font-bold text-blue-600">
          2 Days
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition">

          Start Mock Interview

        </button>

      </div>

    </div>
  );
}

export default UpcomingInterview;