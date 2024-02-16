import pic1 from '../assets/p1.jpg'
import {GoDotFill} from 'react-icons/go'
import {MdOutlineLocalPhone} from 'react-icons/md'
import {IoPersonCircleSharp} from 'react-icons/io5'

const ProfileCard = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full p-6 bg-white text-black flex flex-col justify-center items-center rounded shadow'>
            <img src={pic1} alt="img" className='w-[100px] h-[100px] rounded-full'/>
            <p className='font-bold text-xl my-2'>Kunjan Goyal</p>
            <p className='flex justify-center items-center'><GoDotFill className='text-gray-400'/> Offline</p>
            <div className='flex my-4'>
                <button className='border-2 border-gray-400 p-2 rounded mr-1 flex justify-center items-center shadow'><MdOutlineLocalPhone className='text-gray-400 text-xl'/>Call</button>
                <button className='border-2 border-gray-400 p-2 rounded ml-1 flex justify-center items-center shadow'><IoPersonCircleSharp className='text-gray-400 text-2xl'/>Profile</button>
            </div>
        </div>
        <div className='w-11/12 bg-white shadow rounded my-4 p-4 text-gray-400'>
            <p className='text-center my-2 font-semibold text-lg'>Customer Details</p>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Email</div>
                <div className='text-gray-600'>kunjangoyal2002@gmail.com</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>First Name</div>
                <div className='text-gray-600'>Kunjan</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Last Name</div>
                <div className='text-gray-600'>Goyal</div>
            </div>
            <button className='text-[#1877F2] font-semibold'>View more details</button>
        </div>
    </div>
  )
}

export default ProfileCard