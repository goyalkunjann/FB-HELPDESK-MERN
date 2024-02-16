import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendlink } from "../backendlink";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = formData;

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${backendlink}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message || "An error occurred during registration.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" name="email" id="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" value={formData.cpassword} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button type="submit" className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;