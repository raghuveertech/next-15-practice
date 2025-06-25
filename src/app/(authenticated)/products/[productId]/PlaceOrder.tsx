'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const PlaceOrder = (props: { productId: string }) => {
  const { productId } = props;

  const router = useRouter();

  const placeOrder = () => {
    setTimeout(() => {
      router.push('/success');
    }, 1000);
  };

  return (
    <div>
      <button onClick={placeOrder}>Place Order {productId}</button>
    </div>
  );
};

export default PlaceOrder;
