const TableFilterRow = ({ columns, filters, setFilters }) => (
  <tr className="bg-blue-50">
    {columns.map((column, index) => (
      column.isFilterableColumn ? (
        <td key={index} className="p-2">
          <input
            type="text"
            value={filters[column.key] || ''}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                [column.key]: e.target.value,
              }))
            }
            placeholder={`Search ${column.label || column.key}`}
            className="w-full px-2 py-1 text-sm border rounded"
          />
        </td>
      ) : (
        <td key={index} />
      )
    ))}
  </tr>
);

export default TableFilterRow;
