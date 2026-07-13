import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Infosys",
    review:
      "Career Copilot AI increased my ATS score from 58 to 92. I finally started getting interview calls.",
  },
  {
    name: "Priya Patil",
    role: "Frontend Developer",
    review:
      "The AI mock interviews felt realistic and helped me improve my confidence before placements.",
  },
  {
    name: "Aditya Kulkarni",
    role: "Final Year Student",
    review:
      "The dashboard made it so easy to track every application and interview in one place.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Loved by Students
          </h2>

          <p className="mt-4 text-slate-600">
            Thousands of students are preparing smarter with Career Copilot AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="flex text-yellow-400 gap-1">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="mt-6 text-slate-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;