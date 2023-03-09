import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="fixed bottom-0 left-0 mt-12 w-full bg-white text-gray-600">
      <div className="container py-8 sm:flex">
        <Link
          href="/"
          className="inline-flex items-center justify-center text-gray-900 md:justify-start"
        >
          <Image
            src="/meow-logo.png"
            alt="logo"
            width={24}
            height={24}
          />
          <span className="text-md ml-3">Ryk's Blog</span>
        </Link>

        <p className="text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          Copyright
        </p>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
