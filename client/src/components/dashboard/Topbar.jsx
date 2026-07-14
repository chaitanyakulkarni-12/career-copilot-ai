function Topbar() {
  return (
    <header className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">

      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back, Chaitanya 👋
        </p>

      </div>

      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        CK
      </div>

    </header>
  );
}

export default Topbar;