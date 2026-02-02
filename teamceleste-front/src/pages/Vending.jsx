import { useState } from "react";
import ProductList from "../componentes/ProductList";
import MoneyPanel from "../componentes/MoneyPanel";

export default function Vending() {
  const [money, setMoney] = useState(0);

  const products = [
    { id: 1, name: "Coca Cola", price: 1.5 },
    { id: 2, name: "Pepsi", price: 1.4 },
    { id: 3, name: "Agua", price: 1.0 },
    { id: 4, name: "Papas", price: 1.25 }
  ];

  const addMoney = (amount) => {
    setMoney(prev => prev + amount);
  };

  const buyProduct = (product) => {
    if (money < product.price) {
      alert("💸 Dinero insuficiente");
      return;
    }

    setMoney(prev => prev - product.price);
    alert(`✅ Compraste ${product.name}`);
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <ProductList products={products} onBuy={buyProduct} />
      <MoneyPanel money={money} onAddMoney={addMoney} />
    </div>
  );
}
