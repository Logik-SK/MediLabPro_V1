import SummaryRow from './SummaryRow';

const OfferEditor = ({ offerData, offerAmount, onChange, fallbackLabel }) => {
  if (offerData.label) {
    return (
      <div className="flex justify-between items-center">
        <label htmlFor="offerAmount" className="flex-grow">{offerData.label}:</label>
        <div className="flex items-center">
          <span className="text-red-500 font-medium mr-1">- ₹</span>
          <input
            type="number"
            id="offerAmount"
            name="offerAmount"
            value={offerAmount}
            onChange={(e) => onChange(e.target.value)}
            className="w-24 border rounded px-2 py-1 text-sm text-red-500 font-medium text-right"
            placeholder="0.00"
          />
        </div>
      </div>
    );
  }

  if (offerAmount > 0) {
    return <SummaryRow label={fallbackLabel} value={offerAmount} isNegative />;
  }

  return null;
};

export default OfferEditor;
