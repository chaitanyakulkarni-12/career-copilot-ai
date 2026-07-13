import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import Interview from "../pages/Interview";
import JobTracker from "../pages/JobTracker";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/resume" element={<ResumeAnalyzer />} />

        <Route path="/interview" element={<Interview />} />

        <Route path="/jobs" element={<JobTracker />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;