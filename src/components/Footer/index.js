// Footer 
"use client"
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import CopyRight from './CurrentYear'

const Footer = () => {
    const navBlocks = [
        {
            title: 'TOP 100 TOKENS',
            links: [
                { label: 'Hote', href: '#' },
                { label: 'New', href: '#' },
                { label: 'Daily Top', href: '#' },
                { label: 'Most Traded', href: '#' },
            ],
        },
        {
            title: 'Recently Deployed',
            links: [
                { label: 'Binance Tokens', href: '#' },
                { label: 'Etherium Tokens', href: '#' },
                { label: 'Cronos Tokens', href: '#' },
                { label: 'Polygon Tokens', href: '#' },
            ],
        },
        {
            title: 'Services',
            links: [
                { label: 'Promote Token', href: '#' },
                { label: 'Banner Ad', href: '#' },
                { label: 'Submit Token', href: '#' },
            ],
        },
        {
            title: 'Contact',
            links: [
                { label: 'Email', href: '#' },
                { label: 'Telegram', href: '#' },
                { label: 'Discord', href: '#' },
            ],
        },
    ];

    return (
        <>
            <hr className='border-t-1 border-gray-800 w-[70%] mx-auto'></hr>
            <div className="container my-6 m-auto text-white p-8 flex flex-wrap justify-center md:justify-between">

                {navBlocks.map((block, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <h3 className="lg:text-xl lg:font-extrabold mb-4">{block.title}</h3>
                        <ul className="lg:font-medium lg:text-xl">
                            {block.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="py-1">
                                    <Link href={link.href}>
                                        <p>{link.label}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <SocialLinks />
                <hr className='border-t-1 border-gray-800 my-4 w-[75%] m-auto'></hr>
                <CopyRight />
            </div>


        </>

    );
};

export default Footer;