import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

function LoginForm() {
  return (
    <>

      <form className="space-y-5">

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
            placeholder="Enter password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

        <div className="flex justify-between items-center">

          <label className="flex gap-2 items-center text-sm">

            <input type="checkbox" />

            Remember me

          </label>

          <button
            type="button"
            className="text-blue-600 text-sm"
          >
            Forgot Password?
          </button>

        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </button>

      </form>

      <div className="my-6 text-center text-gray-500">

        OR

      </div>

      <SocialLogin />

      <p className="text-center mt-8">

        Don't have an account?

        <Link
          to="/signup"
          className="text-blue-600 ml-2"
        >
          Sign Up
        </Link>

      </p>

    </>
  );
}

export default LoginForm;