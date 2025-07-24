import { useState, useMemo } from 'react';

export default function getTableData(config, tableRowData = '') {
  const [filters, setFilters] = useState({});
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const pageSize = config.pageSize || 10;

  const filteredRows = useMemo(() => {
    let data;
    if (tableRowData)
      data = [...tableRowData];
    else
      data = [...config.rows];

    Object.entries(filters).forEach(([key, value]) => {
      data = data.filter(row =>
        row[key]?.toString().toLowerCase().includes(value.toLowerCase())
      );
    });
    if (sortKey) {
      data.sort((a, b) =>
        sortOrder === 'asc'
          ? a[sortKey] > b[sortKey] ? 1 : -1
          : b[sortKey] > a[sortKey] ? 1 : -1
      );
    }
    return data;
  }, [config.rows, filters, sortKey, sortOrder]);

  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const paginatedRows = filteredRows.slice((page - 1) * pageSize, page * pageSize);

  return {
    title: config.title,
    subtitle: config.subtitle,
    columns: config.columns,
    rows: paginatedRows,
    filters,
    setFilters,
    sortKey,
    setSortKey,
    sortOrder,
    setSortOrder,
    page,
    setPage,
    totalPages
  };
}
