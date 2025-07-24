const SummaryRow = ({ label, value = 0, isPositive = false, isNegative = false }) => {
  const amount = Number(value).toFixed(2);
  const color = isNegative ? 'text-red-500' : isPositive ? 'text-green-600' : 'text-gray-800';

  return (
    <div>
      <div className="flex justify-between py-1">
        <span>{label}:</span>
        <span className={`${color} font-medium`}>
          {isNegative ? '-' : '+'} ₹{amount}
        </span>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default SummaryRow;
