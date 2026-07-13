import {
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaRoute,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt className="text-4xl text-blue-600" />,
    title: "ATS Resume Analysis",
    description:
      "Upload your resume and receive an ATS score with actionable suggestions to improve it.",
  },
  {
    icon: <FaRobot className="text-4xl text-purple-600" />,
    title: "AI Mock Interview",
    description:
      "Practice technical and HR interviews with AI and get instant feedback on your performance.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    title: "Job Tracker",
    description:
      "Track applications, interviews, offers and rejections from one organized dashboard.",
  },
  {
    icon: <FaRoute className="text-4xl text-green-600" />,
    title: "Career Roadmap",
    description:
      "Get a personalized learning roadmap based on your career goals and current skills.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need to Crack Interviews
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Career Copilot AI combines resume optimization,
            interview preparation and job management into one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {item.icon}

              <h3 className="text-xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;