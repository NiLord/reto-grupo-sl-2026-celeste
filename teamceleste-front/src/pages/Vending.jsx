import { useEffect, useState } from 'react';
import { getProducts } from '../services/vendingService';
import ProductList from '../components/ProductList';
import MoneyPanel from '../components/MoneyPanel';

export default function VendingMachine() {
  const [products, setProducts] = useState([]);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const addMoney = (amount) => {
    setMoney(prev => prev + amount);
  };

  const buyProduct = (product) => {
    if (money < product.price) {
      alert('Dinero insuficiente');
      return;
    }

    setMoney(prev => prev - product.price);
    alert(`Compraste ${product.name}`);
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      <ProductList products={products} onBuy={buyProduct} />
      <MoneyPanel money={money} onAddMoney={addMoney} />
    </div>
  );
}