'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      redirect('/');
    }
  }, [count]);

  return (
    <>
      <h1>Order Placed Successfully</h1>
      <p>{count}</p>
    </>
  );
};
export default SuccessPage;
