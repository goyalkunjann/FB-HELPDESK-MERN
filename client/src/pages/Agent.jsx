
import { BsFillBarChartFill } from 'react-icons/bs';
import { MdPeopleAlt } from 'react-icons/md';
import { IoIosChatboxes } from 'react-icons/io';
import { RiRecycleFill } from 'react-icons/ri';
import Chats from '../components/Chat';
import Conversation from '../components/Conversation';
import ProfileCard from '../components/ProfileCard';

const Agent = () => {
  return (
    <div className='grid grid-cols-12 h-screen'>
      {/* Sidebar with icons */}
      <div className='col-span-1 bg-[#1877F2] flex flex-col items-center py-4 space-y-4'>
        <RiRecycleFill className='text-white text-3xl' />
        <IoIosChatboxes className='text-white text-3xl' />
        <MdPeopleAlt className='text-white text-3xl' />
        <BsFillBarChartFill className='text-white text-3xl' />
      </div>
      
      {/* Chat list section */}
      <div className='col-span-2 bg-gray-100 overflow-auto'>
        <Chats />
      </div>
      
      {/* Main conversation display */}
      <div className='col-span-7 bg-gray-200 overflow-auto'>
        <Conversation />
      </div>
      
      {/* Profile card section */}
      <div className='col-span-2 bg-gray-200 overflow-auto'>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Agent;
