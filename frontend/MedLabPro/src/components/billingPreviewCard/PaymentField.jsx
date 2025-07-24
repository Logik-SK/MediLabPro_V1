const PaymentField = ({ index, payment, onChange, onRemove, removable }) => (
  <div className="relative border bg-gray-50 p-4 rounded-md shadow-inner">
    <div className="flex justify-end mb-2">
      {removable && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200 px-3 py-1.5 rounded-full text-xs font-semibold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          ✕ Remove
        </button>
      )}
    </div>
    <div className="flex gap-2 mb-2">
      <input
        type="number"
        name={`paidAmount-${index}`}
        placeholder="Paid Amount"
        value={payment.amount}
        onChange={(e) => onChange(index, 'amount', e.target.value)}
        className="w-1/2 border px-3 py-2 rounded text-sm font-semibold"
      />
      <select
        name={`paymentMode-${index}`}
        value={payment.mode}
        onChange={(e) => onChange(index, 'mode', e.target.value)}
        className="w-1/2 border px-3 py-2 rounded text-sm"
      >
        <option value="">Select mode</option>
        <option value="CARD">CARD</option>
        <option value="CASH">CASH</option>
        <option value="UPI">UPI</option>
        <option value="OTHER">OTHER</option>
      </select>
    </div>
    {payment.mode && payment.mode !== 'CASH' && (
      <input
        type="text"
        name={`reference-${index}`}
        placeholder="Reference Number"
        value={payment.reference}
        onChange={(e) => onChange(index, 'reference', e.target.value)}
        className="w-full border px-3 py-2 rounded text-sm"
      />
    )}
  </div>
);

export default PaymentField;
