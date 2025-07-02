'use client';

import { useRouter } from 'next/navigation';
import React, { startTransition } from 'react';

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();

  const reloadComponent = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>There is an error loading the review</p>
      <button onClick={reloadComponent}>Refresh</button>
    </div>
  );
};

export default ErrorBoundary;
