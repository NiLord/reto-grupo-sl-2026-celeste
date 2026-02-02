import React from 'react';

export default function BottomCash({ moneyValues = [], onAddMoney = () => {} }) {
  return (
    <div
      className="bottom-cash"
      style={{
        display: 'flex',
        gap: '15px',
        overflowX: 'auto',
        padding: '10px',
        alignItems: 'center',
        color: 'black'
      }}
    >
      {moneyValues.map((val, idx) => {
        const isCent = val < 1;
        const label = isCent ? `${Math.round(val * 100)}¢` : `$${Number(val).toFixed(val % 1 === 0 ? 0 : 2)}`;
        return (
          <div
            key={idx}
            className="cash-card"
            style={{
              minWidth: 80,
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: 8,
              textAlign: 'center',
              cursor: 'pointer',
              background: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
            }}
            onClick={() => onAddMoney(val)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onAddMoney(val); }}
          >
            <div style={{ fontSize: 16, fontWeight: 700 }}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}
