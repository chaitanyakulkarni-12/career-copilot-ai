function LearningProgress() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Learning Progress
      </h2>

      <div className="space-y-6">

        <div>

          <div className="flex justify-between mb-2">
            <span>React</span>
            <span>80%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full">
            <div className="h-3 w-4/5 bg-blue-600 rounded-full"></div>
          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <span>DSA</span>
            <span>55%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full">
            <div className="h-3 w-2/4 bg-green-500 rounded-full"></div>
          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <span>System Design</span>
            <span>30%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full">
            <div className="h-3 w-1/3 bg-purple-600 rounded-full"></div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LearningProgress;