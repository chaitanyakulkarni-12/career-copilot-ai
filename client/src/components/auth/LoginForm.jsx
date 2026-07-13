import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

      <h1 className="text-3xl font-bold text-center">
        Welcome Back 👋
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Login to Career Copilot AI
      </p>

      <form className="space-y-5 mt-8">

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-4"
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-6">
        Don't have an account?

        <Link
          to="/signup"
          className="text-blue-600 ml-2"
        >
          Sign Up
        </Link>

      </p>

    </div>
  );
}

export default LoginForm;