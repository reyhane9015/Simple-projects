// src/App.tsx

type PaymentMethod = 'credit' | 'debit' | 'cash';



const PaymentComponent = ({ payment }: { payment: PaymentMethod }) => {
  return (
    <div>
      <h2>Payment Method: {payment}</h2>
      {payment === 'credit' && <p>Credit card payment selected.</p>}
      {payment === 'debit' && <p>Debit card payment selected.</p>}
      {payment === 'cash' && <p>Cash payment selected.</p>}
    </div>
  );
};

export default PaymentComponent;
