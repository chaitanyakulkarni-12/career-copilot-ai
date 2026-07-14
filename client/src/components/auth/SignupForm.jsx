import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

function SignupForm() {
  return (
    <>
      <form className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Create Account
        </button>

      </form>

      <div className="my-6 text-center text-gray-500">
        OR
      </div>

      <SocialLogin />

      <p className="text-center mt-8">
        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>
      </p>
    </>
  );
}

export default SignupForm;