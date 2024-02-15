import { useNavigate } from "react-router-dom";

const Delete = () => {
    const navigate = useNavigate();

    // Mock function to simulate disconnect
    const disconnect = () => {
        console.log("Simulated disconnect");
        navigate("/connect");
    };

    // Navigate to a mock conversations page
    const goToConversations = () => {
        navigate("/conversations");
    };

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-xl shadow-lg w-96">
                <div className="text-center">
                    <p><strong>Name:</strong> Your Business Name</p>
                    <p><strong>Category:</strong> Your Category</p>
                </div>
                <div className="w-full">
                    <button
                        onClick={disconnect}
                        className="w-full bg-red-700 hover:bg-red-800 text-white p-3 rounded-md mb-4"
                    >
                        Disconnect
                    </button>
                    <button
                        onClick={goToConversations}
                        className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-3 rounded-md"
                    >
                        Go to Conversations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Delete;
