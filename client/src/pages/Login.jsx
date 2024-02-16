import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendlink } from "../backendlink";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
 
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(`${backendlink}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("jwtToken", data.token);
        alert("Login Successful");
        navigate("/connect"); 
      } else {
        alert(data.message || "Invalid Credentials");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login to your account</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-gray-400 p-2 rounded-md"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              className="w-full border border-gray-400 p-2 rounded-md"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember Me
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button type="submit" className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-3 rounded-md">
              Login
            </button>
            <div className="flex justify-center items-center gap-1 mt-4 text-sm text-gray-600">
              New to Helpdesk?{" "}
              <span onClick={() => navigate("/signup")} className="text-blue-900 hover:underline cursor-pointer">
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
