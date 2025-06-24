import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#e1e1ff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>Footer</p>
      <ul>
        <li>
          <Link href={'/offers?lang=en'}>Offers English</Link>
        </li>
        <li>
          <Link href={'/offers?lang=es'}>Offers Spanish</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
