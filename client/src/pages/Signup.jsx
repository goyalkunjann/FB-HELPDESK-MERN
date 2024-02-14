import  { useState } from "react";

const Signup = () => {
    
    const [formData, setFormData] = useState({
        name: '',
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
                <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" name="name" id="name" placeholder="Kunjan Goyal" value={formData.name} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="kunjan@richpanel.com" value={formData.email} onChange={handleChange} className="w-full border border-gray-400 p-2 rounded-md" />
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
                        <button type="submit" className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
