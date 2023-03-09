import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="flex items-end"
      >
        <Image
          src="/meow-logo.png"
          alt="logo"
          width={24}
          height={24}
        />
        <span className="ml-2 font-bold text-primary-500">Ryk's Blog</span>
      </Link>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#">Products</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#">Pricing</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#">Docs</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#">Company</Link>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <Link
            href="#"
            className="hover:text-gray-400"
          >
            Login
          </Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link
            href="#"
            className="rounded-sm bg-primary-500 py-2 px-4 text-white hover:bg-primary-700"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
