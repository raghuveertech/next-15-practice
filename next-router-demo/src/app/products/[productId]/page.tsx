import { notFound } from 'next/navigation';

const ProductDetails = async (props: {
  params: Promise<{ productId: string }>;
}) => {
  const params = await props.params;
  const { productId } = params;
  if (parseInt(productId) > 1000) {
    notFound();
  }
  return <h2>Product Details {productId}</h2>;
};

export default ProductDetails;
