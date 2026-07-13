import {
  FaUsers,
  FaFileAlt,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    number: "10K+",
    title: "Students Guided",
  },
  {
    icon: <FaFileAlt className="text-4xl text-green-600" />,
    number: "95%",
    title: "ATS Success Rate",
  },
  {
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    number: "500+",
    title: "Partner Companies",
  },
  {
    icon: <FaStar className="text-4xl text-yellow-500" />,
    number: "4.9/5",
    title: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mt-6 text-slate-900">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;