type ReviewDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails = (props: ReviewDetailsProps) => {
  const { productId, reviewId } = props.params;
  return (
    <>
      <h1>
        Review {reviewId} of Product {productId}
      </h1>
    </>
  );
};

export default ReviewDetails;
