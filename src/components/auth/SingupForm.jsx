import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/form.css";
import { FcGoogle } from "react-icons/fc";
function SignupForm() {
   const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

 const handleSignUp = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!form.password) {
    newErrors.password = "Password is required";
  } else if (!strongPassword.test(form.password)) {
    newErrors.password = "Password is too weak";
  }

  if (!form.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password is required";
  } else if (form.password !== form.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  
  try {
    const res = await fetch(
      "https://6883b36f21fa24876a9eeb13.mockapi.io/users/name",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
   navigate("/login");

  } catch (error) {
    console.log(error);
  }
};

  

  return (
    <>
     <form  className="auth-form" onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />
      {errors.email && <span className="error">{errors.email}</span>}
<div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={form.password}
    onChange={(e) =>
      setForm({
        ...form,
        password: e.target.value,
      })
    }
  />

  <button
    type="button"
    className="eye-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

{errors.password && (
  <span className="error">{errors.password}</span>
)}
      <div className="password-box">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    value={form.confirmPassword}
    onChange={(e) =>
      setForm({
        ...form,
        confirmPassword: e.target.value,
      })
    }
  />

  <button
    type="button"
    className="eye-btn"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
  >
    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

{errors.confirmPassword && (
  <span className="error">{errors.confirmPassword}</span>
)}

      <button type="submit" className="submit">
        Sign Up
      </button>

      <button type="button" className="Gmail">
        <FcGoogle size={20} />
        Continue with Gmail
      </button>

      <p>
        Already have an account? <Link className="text-[#1b5fd6] underline font-bold  " to="/login">
          Log In
        </Link>
      </p>
    </form>
    </>
  )
 }
export default SignupForm;