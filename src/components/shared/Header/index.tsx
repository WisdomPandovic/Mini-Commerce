'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useCartStore } from '@/store/cartStore'

const Header: FC = () => {
  const { items } = useCartStore(state => state)
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white text-black flex items-center justify-between p-4">
      <nav className="hidden md:flex items-center space-x-4">
        <Link href="/home" className="text-sm font-bold">
          Home
        </Link>
        <Link href="/stores/shop" className="text-sm font-bold">
          Shop
        </Link>
        <Link href="/stores/women-wear" className="text-sm font-bold">
          Women
        </Link>
        <Link href="/stores/men-wear" className="text-sm font-bold">
          Men
        </Link>
      </nav>

      <div className="flex-1 text-center">
        <Link href="/" className="text-xl font-bold">
          Mini-<span className="text-yellow-500">Commerce</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 relative">
      <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded text-sm focus:outline-none focus:border-yellow-500"
          />
        </form>

        <Link href="/cart" className="text-sm">
          <FaShoppingCart className="text-sm sm:text-base text-gray-700 hover:text-gray-900 cursor-pointer" />
          {items.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full translate-x-1/2 -translate-y-1/2">
              {items.length}
            </span>
          )}
        </Link>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 w-full bg-white p-4 space-y-4 md:hidden transition-transform ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col space-y-4">
          <Link href="/home" className="text-sm font-bold" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Shop
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Women
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Men
          </Link>
          <Link href="/" className="text-sm font-bold">
            Catalog
          </Link>
        </nav>
        <div className="flex flex-col space-y-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-3 py-1 rounded text-sm"
          />
        </form>
          <Link href="/cart" className="text-sm" onClick={toggleMenu}>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
