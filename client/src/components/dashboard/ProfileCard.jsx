import { FaUserGraduate, FaEnvelope, FaUniversity, FaPen } from "react-icons/fa";

function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
          CK
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Chaitanya Kulkarni
          </h2>

          <p className="text-gray-500">
            Future Software Engineer 🚀
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <span>cmkulkarni12032006@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <FaUniversity className="text-blue-600" />
          <span>B.E. Information Technology</span>
        </div>

        <div className="flex items-center gap-3">
          <FaUserGraduate className="text-blue-600" />
          <span>Graduation: 2028</span>
        </div>

      </div>

      <button
        className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        <FaPen />
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;