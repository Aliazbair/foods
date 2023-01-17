import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

export const Links = [
  {
    name: 'Orders',
    icon: <TbTruckDelivery size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Favorites',
    icon: <MdFavorite size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Wallet',
    icon: <FaWallet size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Help',
    icon: <MdHelp size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Promotions',
    icon: <AiFillTag size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Best Ones',
    icon: <BsFillSaveFill size={100} className='mr-4 text-orange-500' />,
  },
  {
    name: 'Invite Friends',
    icon: <FaUserFriends size={100} className='mr-4 text-orange-500 ' />,
  },
];
export const Category = () => {
  return (
    <div className='grid gap-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-4  py-32  max-w-7xl mx-auto px-10  '>
      {Links.map(({ name, icon }) => (
        <div
          key={name}
          className='flex  hover:scale-105 transition-all duration-200 flex-col p-2 items-center  justify-center shadow-sm shadow-gray-700 rounded-r-lg cursor-pointer space-x-3'
        >
          <span className=''> {icon}</span>
          <h2 className='text-gray-800 font-bold'>{name}</h2>
        </div>
      ))}
    </div>
  );
};
