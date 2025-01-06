type PropsType = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async (props: PropsType) => {
  const { params } = props;
  const { productId } = await params;
  return <h1>Details About Product {productId}</h1>;
};

export default ProductDetails;
