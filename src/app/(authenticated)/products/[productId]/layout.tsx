export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
      <ol>
        <li>Featured Product 1</li>
        <li>Featured Product 2</li>
      </ol>
    </>
  );
}
