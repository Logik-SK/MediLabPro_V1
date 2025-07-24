import TableCell from './TableCell';

const TableRow = ({ row, columns }) => (
  <tr className="border-b hover:bg-gray-50">
    {columns.map(col => (
      <TableCell key={col.key} value={row[col.key]} type={col.key} isAction={col.isAction} />
    ))}
  </tr>
);

export default TableRow;
