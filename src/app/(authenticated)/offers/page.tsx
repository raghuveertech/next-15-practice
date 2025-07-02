type OffersListProps = {
  searchParams: Promise<{ lang: string }>;
};
const OffersList = async ({ searchParams }: OffersListProps) => {
  const { lang } = await searchParams;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0);
    }, 2000);
  });

  return (
    <div>
      <h1>Offers List</h1>
      <p>Lang = {lang}</p>
      <ul>
        <li>Offer 1</li>
        <li>Offer 2</li>
        <li>Offer 3</li>
      </ul>
    </div>
  );
};

export default OffersList;
