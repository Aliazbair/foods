export const Categories = [
  {
    id: 1,
    name: 'Fast Food',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
  },
  {
    id: 2,
    name: 'Pizza',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
  },
  {
    id: 3,
    name: 'Wings',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
  },
  {
    id: 4,
    name: 'Indian',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
  },
  {
    id: 5,
    name: 'Latest Deals',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
  },
  {
    id: 6,
    name: 'Restaurant Rewards',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
  },
  {
    id: 7,
    name: 'Best Overall',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
  },
  {
    id: 8,
    name: 'Shipped Free',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
  },
];
export const Menu = () => {
  return (
    <div className='grid py-10 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-10'>
      {Categories.map(({ id, name, image }) => (
        <div
          key={id}
          className='shadow-sm shadow-gray-800 cursor-pointer rounded-md p-2 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300'
        >
          <img src={image} alt={name} />
          <h2 className='text-sm md:text-2xl font-mono text-gray-500'>
            {name}
          </h2>
        </div>
      ))}
    </div>
  );
};
