'use client';
import { usePathname } from 'next/navigation';

const OfferNotFound = () => {
  const pathName = usePathname();
  const paths = pathName.split('/');
  return (
    <div>
      <h1>404</h1>
      <h2>Offer {paths[2]} Not Found</h2>
    </div>
  );
};

export default OfferNotFound;
