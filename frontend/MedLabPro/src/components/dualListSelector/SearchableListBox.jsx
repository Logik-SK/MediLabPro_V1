import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchableListBox = ({
  title,
  items,
  selectedItems,
  setSelectedItems,
  name = 'searchableListBox',
  onChange,
  search,
  setSearch,
  itemKey,
  highlightClass,
  hoverClass,
  toggleHighlight,
}) => {
  useEffect(() => {
    const aggregatedTotals = {};

    items.forEach((entry) => {
      Object.entries(entry).forEach(([key, value]) => {
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
          const totalKey = `total${key.charAt(0).toUpperCase()}${key.slice(1)}`;
          aggregatedTotals[totalKey] = (aggregatedTotals[totalKey] || 0) + numericValue;
        }
      });
    });

    const aggregateIdentifier = `${name}Total`;

    onChange?.(name, items);
    onChange?.(aggregateIdentifier, aggregatedTotals);
  }, [items, name, onChange, selectedItems]);

  const handleToggleSelection = (entry) => {
    toggleHighlight(entry, selectedItems, setSelectedItems);
  };

  const renderItemDetails = (entry) => (
    <div className="flex justify-between items-center w-full space-x-4">
      {entry.name && <span className="text-sm font-medium text-gray-700">{entry.name}</span>}
      {entry.category && <span className="text-xs font-medium text-gray-500 italic">{entry.category}</span>}
      {entry.description && (
        <span className="text-sm text-gray-600 truncate max-w-[150px]">{entry.description}</span>
      )}
      {entry.discount && (
        <span className="text-sm text-green-600 font-semibold">-{entry.discount}%</span>
      )}
      {entry.price && <span className="text-sm font-semibold text-gray-800">₹{entry.price}</span>}
    </div>
  );

  return (
    <div className="border rounded p-4 bg-gray-50">
      <h3 className="text-base font-semibold mb-3 text-gray-700">{title}</h3>

      <div className="relative mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${title}`}
          className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400 text-sm" />
      </div>

      <div className="h-64 overflow-y-auto border rounded divide-y divide-gray-100">
        {items
          .filter((entry) => entry[itemKey]?.toLowerCase?.().includes(search.toLowerCase()))
          .map((entry, index) => (
            <div
              key={index}
              onClick={() => handleToggleSelection(entry)}
              className={`px-4 py-3 cursor-pointer transition-colors duration-150 ease-in-out ${
                selectedItems.includes(entry) ? highlightClass : hoverClass
              }`}
            >
              {renderItemDetails(entry)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchableListBox;
