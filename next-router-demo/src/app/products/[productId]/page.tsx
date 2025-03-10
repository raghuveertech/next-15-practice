const ProductDetails = async (props: {
  params: Promise<{ productId: string }>;
}) => {
  const params = await props.params;
  const { productId } = params;
  return <h2>Product Details {productId}</h2>;
};

export default ProductDetails;
