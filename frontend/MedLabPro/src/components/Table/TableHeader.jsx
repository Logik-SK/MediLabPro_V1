const TableHeader = ({ columns, sortKey, sortOrder, setSortKey, setSortOrder }) => {
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <tr className="bg-gradient-to-r from-blue-100 to-indigo-100 text-left text-sm font-semibold tracking-wide shadow-md">
      {columns.map(col => (
        <th
          key={col.key}
          className={`px-6 py-3 relative group cursor-pointer transition duration-200 
            hover:bg-indigo-200 hover:text-indigo-900 ${
              col.sortable ? 'text-indigo-700' : 'text-gray-600'
            }`}
          onClick={() => col.sortable && handleSort(col.key)}
        >
          <div className="flex items-center gap-2">
            {col.label}
            {col.sortable && sortKey === col.key && (
              <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                {sortOrder === 'asc' ? '↑' : '↓'}
              </span>
            )}
            {col.sortable && sortKey !== col.key && (
              <span className="opacity-30 group-hover:opacity-100 transition-opacity duration-200">
                ⇅
              </span>
            )}
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-300" />
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;