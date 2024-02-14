import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [rememberMe, setRememberMe] = useState(false);

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        console.log('Remember Me:', rememberMe);
        
    };

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Login to your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="**********" value={formData.password} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" name="rememberMe" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember Me</label>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="submit" className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">Login</button>
                        <div className="flex justify-center items-center gap-1 mt-4 text-sm text-gray-600">
                            New to Helpdesk? <span onClick={() => navigate("/signup")} className="text-blue-900 hover:underline cursor-pointer">Sign Up</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
