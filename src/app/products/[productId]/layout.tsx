export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div
        style={{
          backgroundColor: 'lightgreen',
          textAlign: 'center',
          padding: '30px',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        <h2>Featured Products</h2>
      </div>
    </>
  );
}
