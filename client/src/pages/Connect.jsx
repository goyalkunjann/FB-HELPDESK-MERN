import  { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { backendlink } from "../backendlink";


const Connect = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [showPages, setShowPages] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false); 
  const overlayRef = useRef(null);

  useEffect(() => {
    
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchPages = async () => {
    setIsConnecting(true); 
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(`${backendlink}/integration`, { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setPages(data.pages || []); 
        setShowPages(true);
      } else {
        alert("Failed to fetch pages.");
      }
    } catch (err) {
      console.error("Error fetching pages: ", err);
      alert("An error occurred while fetching pages.");
    } finally {
      setIsConnecting(false); 
    }
  };

  const handleOverlayClick = (event) => {
    if (overlayRef.current === event.target) {
      setShowPages(false); 
    }
  };

  return (
    <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col items-center justify-center gap-6">
        <h1 className="text-md font-bold text-center mb-4">Facebook Page Integration</h1>
        <button
          onClick={fetchPages}
          disabled={isConnecting}
          className={`w-full ${isConnecting ? "bg-blue-300" : "bg-[#1E4D91]"} hover:bg-blue-900 text-white p-3 rounded-md`}
        >
          {isConnecting ? "Connecting..." : "Connect Page"}
        </button>
        <button
          onClick={() => navigate("/logout")} // Adjust according to your logout handling
          className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-md"
        >
          Logout
        </button>
      </div>
      {showPages && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          onClick={handleOverlayClick}
          ref={overlayRef}
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold">Select a Page</h3>
            {pages.map((page, index) => (
              <div key={index} className="mt-2">
                {page.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Connect;
