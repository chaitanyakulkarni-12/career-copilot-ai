function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 mb-8">

      <h1 className="text-4xl font-bold">
        Welcome Back, Chaitanya 👋
      </h1>

      <p className="mt-3 text-blue-100 text-lg">
        You're making great progress.
        Let's continue preparing for your dream job today.
      </p>

      <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition">
        Continue Learning
      </button>

    </div>
  );
}

export default WelcomeCard;