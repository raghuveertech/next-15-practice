import { notFound } from 'next/navigation';

type OfferDetailsProps = {
  params: {
    offerId: string;
  };
};

const OfferDetails = (props: OfferDetailsProps) => {
  const { params } = props;
  const { offerId } = params;

  if (parseInt(offerId) > 100) {
    notFound();
  }

  return (
    <div>
      <h1>Offer Details of {offerId}</h1>
    </div>
  );
};

export default OfferDetails;
