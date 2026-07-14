import {
  FaHome,
  FaFileAlt,
  FaComments,
  FaBriefcase,
  FaRoad,
  FaCog,
} from "react-icons/fa";

const menu = [
  { icon: <FaHome />, title: "Dashboard" },
  { icon: <FaFileAlt />, title: "Resume" },
  { icon: <FaComments />, title: "Interview" },
  { icon: <FaBriefcase />, title: "Jobs" },
  { icon: <FaRoad />, title: "Roadmap" },
  { icon: <FaCog />, title: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-12">
        🎯 Career Copilot AI
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (

          <button
            key={item.title}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            {item.icon}
            {item.title}
          </button>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;