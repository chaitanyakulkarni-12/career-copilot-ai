import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", applications: 4 },
  { month: "Feb", applications: 8 },
  { month: "Mar", applications: 12 },
  { month: "Apr", applications: 10 },
  { month: "May", applications: 15 },
  { month: "Jun", applications: 18 },
];

function AnalyticsChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Application Analytics
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;