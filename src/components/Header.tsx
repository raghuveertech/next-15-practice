import React from 'react';

const Header = () => {
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
        <li>Login</li>
        <li>Register</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
