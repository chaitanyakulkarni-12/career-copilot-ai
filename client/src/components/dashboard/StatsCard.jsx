function StatsCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;