import ProductCard from './ProductCard';

export default function ProductList({ products, onBuy }) {
  return (
    <div >
      <h2>Todos los productos </h2>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}
