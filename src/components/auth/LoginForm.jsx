import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css"
import { FcGoogle } from "react-icons/fc";

 function LoginForm() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const fetchUsers = async () => {
    const res = await fetch(
      "https://6883b36f21fa24876a9eeb13.mockapi.io/users/name",
    );
    const data = await res.json();
    return data;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const users = await fetchUsers();

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

  navigate("/");
    } else {
      setErrors({
        general: "Invalid email or password",
      });
    }
  };
  return (
    <>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="welcome">
          <h1  className="text-[20px] font-bold text-black capitalize tracking-[1px] text-shadow-[0_2px_10px_var(--color-primary)]">welcome back</h1>
          <p className="text-[#777] text-sm">Login to continue your account</p>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        {errors.general && <span className="error">{errors.general}</span>}

    

        <button type="submit" className="submit">
          Sign In
        </button>

        <div className="divider">
          <span></span>
          <span>or</span>
          <span></span>
        </div>

        <button type="button" className="Gmail">
          <FcGoogle size={20} />
          Continue with Gmail
        </button>

        <p>
          Don't have an account? <Link className="text-[#1b5fd6] underline font-bold  " to="/signup">
  Sign Up
</Link>
        </p>
      </form>
    </>
  );
}
export default LoginForm;