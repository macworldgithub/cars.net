'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'HOME', href: '/Home' },
  { label: 'BUY', href: '/buy' },
  { label: 'SELL', href: '/Sell_to_Wholesale' },
  { label: 'VALUATIONS', href: '/Valuations' },
  { label: 'BI INSIGHTS', href: '/BusinessIntelligence' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <header className="w-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold">
          <span className="text-blue-900">Cars</span>
          <span className="text-gray-100">.net</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-4 md:gap-6 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 ${
                  activePath === item.href
                    ? 'text-blue-900 font-semibold'
                    : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          href="/Login"
          className="bg-[#00008B] hover:bg-[#00008B] text-white font-semibold py-2 px-4 rounded text-sm md:text-base"
        >
          LOGIN
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
