const applications = [
  {
    company: "Google",
    role: "Frontend Intern",
    status: "Interview",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    status: "Applied",
  },
  {
    company: "Amazon",
    role: "React Developer",
    status: "Rejected",
  },
];

function RecentApplications() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Recent Applications
      </h2>

      <div className="space-y-4">

        {applications.map((job, index) => (

          <div
            key={index}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>

              <h3 className="font-semibold">
                {job.role}
              </h3>

              <p className="text-gray-500">
                {job.company}
              </p>

            </div>

            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {job.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentApplications;