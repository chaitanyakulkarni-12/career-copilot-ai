import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Skills",
    value: 78,
    fill: "#2563eb",
  },
];

function SkillsChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Resume Skills
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            innerRadius="60%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={0}
          >

            <RadialBar
              minAngle={15}
              background
              dataKey="value"
            />

            <Legend />

          </RadialBarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SkillsChart;