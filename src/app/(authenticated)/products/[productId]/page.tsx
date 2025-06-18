type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

const ProductDetails = (props: ProductDetailsProps) => {
  const productId = props.params.productId;
  return (
    <>
      <h1>Product Details of {productId}</h1>
    </>
  );
};
export default ProductDetails;
