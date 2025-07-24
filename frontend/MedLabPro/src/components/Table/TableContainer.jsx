import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import PaginationFooter from './PaginationFooter';
import TableFilterRow from './TableFilterRow';
import TableWrapper from './TableWrapper'; // new import

const TableContainer = ({ title, subtitle, columns, rows, page, setPage, totalPages, ...rest }) => {
  const [filters, setFilters] = useState({});

  const filteredRows = rows.filter(row =>
    columns.every(col => {
      const f = filters[col.key]?.toLowerCase() || '';
      const v = String(row[col.key] || '').toLowerCase();
      return v.includes(f);
    })
  );

  return (
    <div className='p-3'>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><TableHeader columns={columns} {...rest} /></thead>
          <tbody>
            <TableFilterRow columns={columns} filters={filters} setFilters={setFilters} />
            {filteredRows.map((row, i) => <TableRow key={i} row={row} columns={columns} />)}
          </tbody>
        </table>
      </div>
      <PaginationFooter page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TableContainer;
