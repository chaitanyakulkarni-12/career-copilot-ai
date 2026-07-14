import DashboardLayout from "../components/dashboard/DashboardLayout";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import RecentApplications from "../components/dashboard/RecentApplications";
import AIRecommendations from "../components/dashboard/AIRecommendations";
import LearningProgress from "../components/dashboard/LearningProgress";
import UpcomingInterview from "../components/dashboard/UpcomingInterview";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import SkillsChart from "../components/dashboard/SkillsChart";
import InterviewCalendar from "../components/dashboard/InterviewCalendar";
import Notifications from "../components/dashboard/Notifications";
import ProfileCard from "../components/dashboard/ProfileCard";

function Dashboard() {
  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      topbar={<Topbar />}
    >
      <WelcomeCard />

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="ATS Resume Score"
          value="92%"
          color="text-blue-600"
        />

        <StatsCard
          title="Interview Ready"
          value="85%"
          color="text-green-600"
        />

        <StatsCard
          title="Applications"
          value="24"
          color="text-orange-500"
        />

        <StatsCard
          title="Career Roadmap"
          value="68%"
          color="text-purple-600"
        />

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <RecentApplications />

        <AIRecommendations />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

    <LearningProgress />

    <UpcomingInterview />

      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

  <AnalyticsChart />

  <SkillsChart />

</div>
<div className="mt-8">

  <InterviewCalendar />

</div>
<div className="mt-8">

    <Notifications />

</div>
<div className="mt-8">

    <ProfileCard />

</div>
    </DashboardLayout>
  );
}

export default Dashboard;