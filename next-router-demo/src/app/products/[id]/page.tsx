const ProductDetails = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const productId = params.id;
  return <h2>Product Details {productId}</h2>;
};

export default ProductDetails;
