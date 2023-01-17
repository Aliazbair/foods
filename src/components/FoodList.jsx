export const FoodList = ({ id, name, category, image, price }) => {
  return (
    <div key={id} className='shadow-md rounded-br-xl relative'>
      <img src={image} alt='' className='w-full h-60 rounded object-cover' />
      <h5 className='text-lg text-gray-200 bg-green-700 absolute top-0 rounded-l px-5 '>
        {category}
      </h5>

      <div className='p-2'>
        <h2>{name}</h2>

        <div className='flex  items-center justify-between py-3 flex-wrap'>
          <button className='text-lg text-gray-100 bg-indigo-700  md:px-1 rounded'>
            Add To card
          </button>
          <span className='text-green-500 font-bold font-mono'>{price}</span>
        </div>
      </div>
    </div>
  );
};
