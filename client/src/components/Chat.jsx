
import { HiOutlineMenuAlt1 as HiBars3BottomLeft } from 'react-icons/hi'; 
import { BsSquare } from 'react-icons/bs';
const Chat = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <p className='flex font-bold text-xl text-gray-600 p-3 items-center'><HiBars3BottomLeft className='mr-2' />Conversations</p>
      <div className='p-3 text-gray-600 border-b-2 bg-gray-200'>
        <div className='flex justify-start items-start my-3'>
            <BsSquare className='mr-2 mt-2'/>
            <div>
                <p className='font-semibold text-lg'>Kunjan Goyal</p>
                <p className='font-semibold text-gray-400 text-sm'>Facebook DM</p>
            </div>
        </div>
        <p className='font-semibold'>Awesome Product</p>
        <p>Hey There! I probably did one of the bes...</p>
      </div>
      <div className='p-3 text-gray-600 border-b-2'>
      <div className='flex justify-start items-start my-3'>
            <BsSquare className='mr-2 mt-2'/>
            <div>
                <p className='font-semibold text-lg'>Gunjan</p>
                <p className='font-semibold text-gray-400 text-sm'>Facebook Post</p>
            </div>
        </div>
        <p className='font-semibold'>Available in Store?</p>
        <p>Hi do you have any T-shirt available in st...</p>
      </div>
    </div>
  )
}

export default Chat