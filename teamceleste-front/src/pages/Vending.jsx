import { useState } from "react";
import ProductList from "../componentes/ProductList";
import MoneyPanel from "../componentes/MoneyPanel";
import BottomCash from "../componentes/bottom_cash";
export default function Vending() {
  const [money, setMoney] = useState(0);

 useEffect(() => {
    fetch("http://localhost:8080/products") // URL luego se cambia
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const products = [
    { id: 1, name: "Coca Cola", price: 1.5 },
    { id: 2, name: "Pepsi", price: 1.4 },
    { id: 3, name: "Agua", price: 1.0 },
    { id: 4, name: "Papas", price: 1.25 },
    { id: 5, name: "Galletas", price: 0.95 },
    { id: 6, name: "Chocolate", price: 1.75 },
    { id: 7, name: "Jugo", price: 1.2 },
    { id: 8, name: "Caramelos", price: 0.5 },
    { id: 9, name: "Energizante", price: 2.0 }
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
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      padding: "20px"
    }}>
      <ProductList products={products} onBuy={buyProduct} />
      <MoneyPanel money={money} onAddMoney={addMoney} />
    </div>
  );
 
  
}
