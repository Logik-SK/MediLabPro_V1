import React, { useState, useEffect, useRef } from 'react';

const MultiSelectField = ({
  label = 'Select Options',
  name,
  value = [],
  onChange,
  options = [],
  required = false,
  margin = '',
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  // Normalize key for internal comparison
  const getOptionKey = (val) => {
    if (typeof val === 'object' && val !== null) {
      return val.key || val.service || val.value || val.label;
    }
    return val;
  };

  const isEqual = (a, b) => getOptionKey(a) === getOptionKey(b);

  const toggleOption = (optionValue) => {
    const matchedOption = options.find((opt) => isEqual(opt.value, optionValue));

    // Normalize and attach label
    const normalizedValue =
      typeof optionValue === 'object' && optionValue !== null
        ? { ...optionValue, label: matchedOption?.label }
        : { key: optionValue, label: matchedOption?.label };

    const exists = value?.some((val) => isEqual(val, normalizedValue));

    const newValue = exists
      ? value.filter((val) => !isEqual(val, normalizedValue))
      : [...(Array.isArray(value) ? value : []), normalizedValue];

    onChange({ target: { name, value: newValue } });
  };

  const isSelected = (optionValue) => {
    const matchedOption = options.find((opt) => isEqual(opt.value, optionValue));
    const normalizedValue =
      typeof optionValue === 'object' && optionValue !== null
        ? { ...optionValue, label: matchedOption?.label }
        : { key: optionValue, label: matchedOption?.label };
    return value?.some((val) => isEqual(val, normalizedValue));
  };

  const filteredOptions = options.filter((opt) =>
    (opt.label || '').toLowerCase().includes(search.toLowerCase())
  );

  const displayText = (Array.isArray(value) ? value : [])
    .map((val) => val.label || getOptionKey(val))
    .join(', ');

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`flex items-center space-x-3 w-full relative ${marginClass}`}
      ref={dropdownRef}
    >
      {/* Label */}
      <label className="text-sm font-medium text-gray-700 whitespace-nowrap w-32">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input wrapper */}
      <div className="flex-1 relative text-sm">
        {/* Display selected */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="border border-gray-300 rounded px-3 py-2 bg-white cursor-pointer flex justify-between items-center"
        >
          <span className="truncate">{displayText || 'Select...'}</span>
          <span className="text-gray-400 ml-2">▾</span>
        </div>

        {/* Dropdown list */}
        {isOpen && (
          <div className="absolute left-0 mt-1 z-20 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            {/* Search */}
            <div className="flex items-center border-b px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 text-sm outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="ml-1 text-gray-400"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => (
                <label
                  key={getOptionKey(opt.value) + index}
                  className="flex items-center px-2 py-1 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={isSelected(opt.value)}
                    onChange={() => toggleOption(opt.value)}
                    className="mr-2"
                  />
                  {opt.label}
                </label>
              ))
            ) : (
              <div className="px-2 py-2 text-sm text-gray-500">No options</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectField;
