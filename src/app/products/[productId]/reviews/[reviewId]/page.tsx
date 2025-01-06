type PropsType = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const Review = async (props: PropsType) => {
  const { params } = props;
  const { productId, reviewId } = await params;
  return (
    <h1>
      Product: {productId}, Review: {reviewId}
    </h1>
  );
};

export default Review;
