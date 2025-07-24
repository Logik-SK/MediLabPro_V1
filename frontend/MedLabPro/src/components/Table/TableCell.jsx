import PaymentStatusIcon from '../uI/PaymentStatusIcon';
import OptionsMenu from './OptionsMenu';

const TableCell = ({ value, type, isAction }) => {
  if (type === 'paymentStatus') return <PaymentStatusIcon status={value} />;
  if (isAction) return <OptionsMenu />;
  return <td className="px-4 py-2">{value}</td>;
};

export default TableCell;
