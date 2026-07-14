import { FaBell } from "react-icons/fa";

const notifications = [
  {
    title: "Resume Score Improved",
    message: "Your ATS score increased to 92%.",
  },
  {
    title: "Interview Scheduled",
    message: "Google interview on 16 July.",
  },
  {
    title: "New Job Match",
    message: "Amazon Frontend Internship found.",
  },
];

function Notifications() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-3 mb-6">

        <FaBell className="text-blue-600 text-xl" />

        <h2 className="text-2xl font-bold">
          Notifications
        </h2>

      </div>

      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-1">
              {item.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;