import PlaceOrder from './PlaceOrder';

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = (props: ProductDetailsProps) => {
  const productId = props.params.productId;
  return {
    title: `Product Details of ${productId}`,
    description: `Description of Product ${productId}`,
  };
};

const ProductDetails = (props: ProductDetailsProps) => {
  const productId = props.params.productId;
  return (
    <>
      <h1>Product Details of {productId}</h1>
      <PlaceOrder productId={productId} />
    </>
  );
};
export default ProductDetails;
