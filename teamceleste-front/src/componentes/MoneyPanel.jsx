import React from 'react';

export default function MoneyPanel({ money, onAddMoney }) {
  return (
    <div>
      <h2>Total</h2>
      <h1>${money.toFixed(2)}</h1>
      <br />
      <p style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>Insertar Pago</p>
      <br />
      <table style={{ fontSize: 'medium', width: '25%', textAlign: 'left', height: '100px', fontWeight: 'bold' }}>
        <tbody>
          <tr style={{ fontStyle: 'bold' }}>
            <th><button>1¢</button></th>
            <th><button>5¢</button></th>
            <th><button>10¢</button></th>
            <th><button>25¢</button></th>
          </tr>
          <tr>
            <th><button>$1</button></th>
            <th><button>$5</button></th>
            <th><button>$10</button></th>
            <th><button>$20</button></th>
          </tr>
          <tr>
            <th><button>$50</button></th>
          </tr>
          <tr>
            <th><span>Pagado: $0.00</span></th>
            <th><span>Piezas: 0</span></th>
            <th><span>Cambio: $0.00</span></th>
          </tr>
        </tbody>
      </table>
      <div className="section">
        <h3 style={{ marginTop: 2, marginBottom: 0 }}>Cambio</h3>
        <br />
        <span style={{ fontWeight: 'bold' }}>A devolver: $0.00</span>
        <span>Piezas: 0</span>
        <p>El cambio se calcula usando las bandejas disponibles y el minimo numero de piezas</p>
        <br />
        <br />
        <button style={{ marginRight: '300px' }}>Limpiar</button>
        <button>Pagar</button>
      </div>
    </div>
  );
}
