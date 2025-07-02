type ReviewDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails = (props: ReviewDetailsProps) => {
  const { productId, reviewId } = props.params;
  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < 0.5) {
    throw new Error('Something Went Wrong');
  }

  return (
    <>
      <h1>
        Review {reviewId} of Product {productId}
      </h1>
    </>
  );
};

export default ReviewDetails;
