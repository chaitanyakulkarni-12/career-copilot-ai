import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

      <h1 className="text-3xl font-bold text-center">
        Create Account
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Start your career journey
      </p>

      <form className="space-y-5 mt-8">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-4"
        />

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
          Create Account
        </button>

      </form>

      <p className="text-center mt-6">
        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </p>

    </div>
  );
}

export default SignupForm;