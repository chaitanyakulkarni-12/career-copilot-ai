const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Infosys",
  "TCS",
];

function Trusted() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-500 font-semibold uppercase tracking-widest mb-10">
          Trusted by students preparing for careers at
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-gray-50 rounded-xl py-6 text-center font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trusted;