const tips = [
  "Add more action verbs.",
  "Include measurable achievements.",
  "Improve skills section.",
  "Mention relevant projects.",
];

function Suggestions() {
  return (
    <div className="bg-white rounded-2xl shadow p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        AI Suggestions
      </h2>

      <ul className="space-y-4">

        {tips.map((tip, index) => (

          <li
            key={index}
            className="bg-slate-100 rounded-lg p-4"
          >
            ✅ {tip}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default Suggestions;