type ReviewsListProps = {
  params: {
    productId: string;
  };
};

const ReviewsList = (props: ReviewsListProps) => {
  const productId = props.params.productId;
  return (
    <>
      <h1>Reviews of product {productId}</h1>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </ul>
    </>
  );
};
export default ReviewsList;
