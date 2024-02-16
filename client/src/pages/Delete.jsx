import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backendlink } from "../backendlink";


const Delete = () => {
  const { pid } = useParams(); 
  const navigate = useNavigate();
  const [pageName, setPageName] = useState(""); 

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const res = await fetch(`${backendlink}/page/${pid}`, { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, 
        },
      });
      const data = await res.json();
      if (res.ok) {
        setPageName(data.name); 
      } else {
        throw new Error("Failed to fetch page data");
      }
    } catch (error) {
      console.error(error);
      navigate("/login"); 
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${backendlink}/page/${pid}`, { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      if (res.ok) {
        alert("Page integration successfully deleted.");
        navigate("/connect"); 
      } else {
        throw new Error("Failed to delete page integration");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the page integration.");
    }
  };

  return (
    <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Facebook Page Integration</h2>
        <p><strong>Integrated Page:</strong> {pageName || "Loading..."}</p>
        <button
          onClick={handleDelete}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition duration-300"
        >
          Delete Integration
        </button>
        <button
          onClick={() => navigate("/conversations")}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
        >
          Go to Conversations
        </button>
      </div>
    </div>
  );
};

export default Delete;
