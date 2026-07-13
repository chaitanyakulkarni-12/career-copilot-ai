import {
  FaUpload,
  FaSearch,
  FaComments,
  FaBriefcase,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-4xl text-blue-600" />,
    title: "Upload Resume",
    description:
      "Upload your latest resume and let our AI start analyzing it.",
  },
  {
    icon: <FaSearch className="text-4xl text-green-600" />,
    title: "ATS Analysis",
    description:
      "Receive ATS score, keyword suggestions and resume improvements.",
  },
  {
    icon: <FaComments className="text-4xl text-purple-600" />,
    title: "Practice Interviews",
    description:
      "Answer AI-generated interview questions and improve with feedback.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    title: "Apply & Track",
    description:
      "Apply confidently and track every application from your dashboard.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            How Career Copilot AI Works
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Four simple steps to become interview-ready and manage your career journey.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            >

              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="mt-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;