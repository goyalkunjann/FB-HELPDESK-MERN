
import pic1 from '../assets/p1.jpg';
import pic2 from '../assets/p2.jpg';

const Conversation = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='p-3 bg-white font-semibold text-xl'>
        Kunjan Goyal
      </div>

      {/* Message list container */}
      <div className='flex-1 overflow-auto'>
        {/* Incoming message */}
        <div className='flex items-center p-2'>
          <img src={pic1} alt="Profile" className='w-10 h-10 rounded-full'/>
          <div className='ml-2 bg-white text-black rounded shadow p-2'>
            Is it in stock right now?
          </div>
        </div>

        {/* Outgoing message */}
        <div className='flex items-center justify-end p-2'>
          <div className='mr-2 bg-white text-black rounded shadow p-2'>
            We have 3 left in stock. If you order before 8PM today, we can ship it today.
          </div>
          <img src={pic2} alt="Profile" className='w-10 h-10 rounded-full'/>
        </div>
      </div>

      {/* Input form */}
      <form className='w-full p-4 bg-white'>
        <input 
          type="text" 
          placeholder='Type something...' 
          className='w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </form>
    </div>
  );
};

export default Conversation;
