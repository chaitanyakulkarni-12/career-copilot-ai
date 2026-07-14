function SocialLogin() {

  const handleGoogleLogin = () => {
    alert("Google Login will be available after backend integration 🚀");
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border rounded-xl py-3 hover:bg-gray-100 transition"
    >
      Continue with Google
    </button>
  );
}

export default SocialLogin;