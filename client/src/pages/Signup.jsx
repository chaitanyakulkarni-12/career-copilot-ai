import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your career journey with AI"
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;