const PaymentStatusIcon = ({ status }) => {
  const color = status === 'Paid' ? 'text-green-600' : 'text-red-500';
  return <td className={`px-4 py-2 font-medium ${color}`}>{status}</td>;
};

export default PaymentStatusIcon;
