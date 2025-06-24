'use client';
import Link from 'next/link';
import React from 'react';
import './../app/global.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      style={{
        backgroundColor: '#ffc8c8',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>Header</p>
      <ul>
        <li>
          <Link
            className={pathname === '/login' ? 'active' : ''}
            href={'/login'}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/register' ? 'active' : ''}
            href={'/register'}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/contact' ? 'active' : ''}
            href={'/contact'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
