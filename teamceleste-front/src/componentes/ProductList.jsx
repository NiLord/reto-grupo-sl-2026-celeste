import ProductCard from "./ProductCard";

export default function ProductList({ products, onBuy }) {
  return (
    <div>
      <h2>Productos</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "15px"
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={onBuy}
          />
        ))}
      </div>
    </div>
  );
}
