const AllReviewsPage = async (props: {
  params: Promise<{ productId: string }>;
}) => {
  const params = await props.params;
  const { productId } = params;
  return <h1>Reviews for product {productId}</h1>;
};
export default AllReviewsPage;
