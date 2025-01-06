type PropsType = {
  params: Promise<{ productId: string }>;
};

const ReviewsList = async (props: PropsType) => {
  const { params } = props;
  const { productId } = await params;
  return <h1>All Reviews about Product {productId}</h1>;
};

export default ReviewsList;
