import LoginForm from "../components/auth/LoginForm";
import AuthImage from "../components/auth/AuthImage";
function Login() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="
          flex flex-col md:flex-row
          w-full max-w-4xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-lg
        ">
        <AuthImage />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;