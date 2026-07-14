function InterviewCalendar() {
  const interviews = [
    {
      company: "Google",
      role: "Frontend Intern",
      date: "16 July 2026",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      date: "20 July 2026",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      date: "25 July 2026",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Upcoming Interviews
      </h2>

      <div className="space-y-4">

        {interviews.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >

            <h3 className="font-semibold">
              {item.company}
            </h3>

            <p className="text-gray-600">
              {item.role}
            </p>

            <p className="text-blue-600 mt-2 text-sm">
              {item.date}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InterviewCalendar;