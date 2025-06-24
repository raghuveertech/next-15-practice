import Link from 'next/link';

const Products = () => {
  const products = [1, 2, 3];
  return (
    <>
      <h1>Products List</h1>
      <ul>
        <li>
          <Link href={`/products/${products[0]}`}>Product 1</Link>
        </li>
        <li>
          <Link href={`/products/${products[1]}`}>Product 2</Link>
        </li>
        <li>
          <Link href={`/products/${products[2]}`}>Product 3</Link>
        </li>
      </ul>
    </>
  );
};
export default Products;
