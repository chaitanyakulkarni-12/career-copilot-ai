import {
  FaHome,
  FaFileAlt,
  FaComments,
  FaBriefcase,
  FaRoad,
  FaCog,
} from "react-icons/fa";

const menu = [
  {
    icon: <FaHome />,
    title: "Dashboard",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Analyzer",
  },
  {
    icon: <FaComments />,
    title: "Mock Interview",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Tracker",
  },
  {
    icon: <FaRoad />,
    title: "Career Roadmap",
  },
  {
    icon: <FaCog />,
    title: "Settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        🎯 Career Copilot AI
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (
          <button
            key={item.title}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;