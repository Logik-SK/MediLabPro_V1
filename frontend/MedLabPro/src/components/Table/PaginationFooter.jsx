const PaginationFooter = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-t text-sm bg-gray-50">
      <span>Page {page} of {totalPages}</span>
      <div className="space-x-2">
        <button
          onClick={() => setPage(Math.max(page - 1, 1))}
          disabled={page <= 1}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(Math.min(page + 1, totalPages))}
          disabled={page >= totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
