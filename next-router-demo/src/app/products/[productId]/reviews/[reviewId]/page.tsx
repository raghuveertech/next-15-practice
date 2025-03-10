const SingleReviewPage = async (props: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const params = await props.params;
  const { productId, reviewId } = params;
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default SingleReviewPage;
