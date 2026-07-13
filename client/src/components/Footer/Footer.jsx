import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              Career Copilot AI
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Helping students crack internships and jobs with
              AI-powered resume analysis, mock interviews and
              smart job tracking.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Resume Analysis
              </li>

              <li className="hover:text-white cursor-pointer">
                AI Mock Interview
              </li>

              <li className="hover:text-white cursor-pointer">
                Job Tracker
              </li>

              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white cursor-pointer">
                Interview Tips
              </li>

              <li className="hover:text-white cursor-pointer">
                Resume Guide
              </li>

              <li className="hover:text-white cursor-pointer">
                FAQs
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="hover:text-blue-400 cursor-pointer"/>

              <FaLinkedin className="hover:text-blue-400 cursor-pointer"/>

              <FaTwitter className="hover:text-blue-400 cursor-pointer"/>

              <FaEnvelope className="hover:text-blue-400 cursor-pointer"/>

            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl">
              Contact Us
            </button>

          </div>

        </div>

        <hr className="border-slate-700 my-10"/>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400">
            © 2026 Career Copilot AI. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-400">

            <p className="hover:text-white cursor-pointer">
              Privacy
            </p>

            <p className="hover:text-white cursor-pointer">
              Terms
            </p>

            <p className="hover:text-white cursor-pointer">
              Cookies
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;