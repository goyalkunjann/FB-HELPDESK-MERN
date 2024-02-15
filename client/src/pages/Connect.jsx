import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connect = () => {
    const navigate = useNavigate();
    const [isConnecting, setIsConnecting] = useState(false);

    const connectFB = () => {
        setIsConnecting(true);
        
        // Simulate a network request with a timeout
        setTimeout(() => {
            console.log("Connected to Facebook");
            setIsConnecting(false);
            // Navigate to another page or show success message
        }, 2000);
    };

    const userLogout = () => {
        navigate("/login");
    };

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-6 bg-white p-10 rounded-xl shadow-lg w-96">
                <h1 className="text-md font-bold text-center mb-4">
                    Facebook Page Integration
                </h1>
                <button
                    onClick={connectFB}
                    disabled={isConnecting}
                    className={`flex justify-center items-center w-full ${
                        isConnecting ? "bg-blue-300" : "bg-[#1E4D91]"
                    } hover:bg-blue-900 text-white p-3 rounded-md`}
                >
                    {isConnecting ? "Connecting..." : "Connect Page"}
                </button>
                <button
                    onClick={userLogout}
                    className="flex justify-center items-center w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-md"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Connect;
