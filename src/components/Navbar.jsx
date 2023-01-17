import Logo from '../assets/commerce.png';

export default function Navbar() {
  return (
    <div className=' flex items-center justify-between p-4 z-[100] shadow-sm shadow-red-400 absolute w-full bg-slate-800 text-white'>
       <img src={Logo} className='w-11 h-11 border border-solid border-red-500 rounded-full hover:scale-90 transition-all duration-300  cursor-pointer md:w-16  md:h-16 ' alt="" />

       {/* left */}
      <div>
        {/* <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sing Up</button> */}
      </div>
    </div>
  );
}
