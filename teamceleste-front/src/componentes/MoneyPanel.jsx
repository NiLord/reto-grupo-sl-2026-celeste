export default function MoneyPanel({ money, onAddMoney }) {
  return (
    <div>
      <h2>Dinero insertado</h2>
      <h1>${money.toFixed(2)}</h1>

      <button onClick={() => onAddMoney(0.25)}>+ $0.25</button>
      <button onClick={() => onAddMoney(0.5)}>+ $0.50</button>
      <button onClick={() => onAddMoney(1)}>+ $1.00</button>
    </div>
  );
}
