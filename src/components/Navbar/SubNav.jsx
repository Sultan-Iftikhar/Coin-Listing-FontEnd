import React from 'react';
import Link from 'next/link';

function SubNav() {
  const items = [
    { label: "🔥 Trending Coins", link: "/trending-coins" },
    { label: "🌟 New Coin Listing", link: "/new-coin-listing" },
    { label: "👑 Today Popular Coins", link: "/today-popular-coins" },
    { label: "💎 Today Top Crypto Gainers", link: "/top-crypto-gainers" },
    { label: "✈️ AirDrops", link: "/airdrops" },
    { label: "📣 Advertise", link: "/advertise" },
  ];

  return (
    <div className='container hidden md:block mt-4 mx-auto px-4 sm:px-6 lg:px-8 '>
        <hr className='border-t border-gray-700 w-[70%] m-auto'></hr>
      <ul className='flex flex-wrap items-center justify-between gap-2 pt-4'>
        {items.map((item, index) => (
          <li key={index} className="mb-2 sm:mb-0">
            <Link href={item.link}>
              <p className="text-xl font-extrabold cursor-pointer">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubNav;
