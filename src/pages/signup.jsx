import SignupForm from "../components/auth/SingupForm";
import AuthImage from "../components/auth/AuthImage";
function Signup() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
        <AuthImage />
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;