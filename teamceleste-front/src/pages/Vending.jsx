import { useState, useEffect } from "react";
import ProductList from "../componentes/ProductList";
import MoneyPanel from "../componentes/MoneyPanel";
import BottomCash from "../componentes/bottom_cash";

export default function Vending() {
  const [money, setMoney] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/productos")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  const addMoney = (amount) => {
    setMoney(prev => prev + amount);
  };

  const buyProduct = (product) => {
    if (money < product.precio) {
      alert("💸 Dinero insuficiente");
      return;
    }

    setMoney(prev => prev - product.precio);
    alert(`✅ Compraste ${product.nombre}`);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      padding: "20px"
    }}>
      <ProductList products={products} onBuy={buyProduct} />
      <MoneyPanel money={money} onAddMoney={addMoney} />
      <BottomCash></BottomCash>
    </div>
  );
 
  
} 
