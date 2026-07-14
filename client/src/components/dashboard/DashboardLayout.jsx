function DashboardLayout({ sidebar, topbar, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {sidebar}

      <div className="flex-1 flex flex-col">

        {topbar}

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
