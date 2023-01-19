import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
      <div className='flex justify-end text-2xl'>
        <Link href="/" className='p-6'>Home</Link>
        <Link href="/dashboard" className='p-6'>Dashboard</Link>
        <Link href="/aboutUs" className='p-6'>About Us</Link>
      </div>
    );
}

export default Navbar;
