export default function ProductCard({ product, onBuy }) {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
      <h4>{product.name}</h4>
      <p>Precio: ${product.price.toFixed(2)}</p>

      <button onClick={() => onBuy(product)}>
        Añadir
      </button>
    </div>
  );
}
